#!/usr/bin/env python

import json
import os

GOD_ROOT = os.path.join(os.path.dirname(__file__), '..')

def generate_i(functions):
    return 'var i = {{\n{}\n}};\n\nexports.i = i;'.format(functions)

def generate_q(events=None):
    if not events:
        with open(os.path.join(GOD_ROOT, 'jsonData', 'ExampleEvents1.json')) as fs:
            events = json.load(fs)
    events = json.dumps(events, indent=4)
    return 'var q = {};\n\nexports.q = q;'.format(events)

def generate_d(descriptions=None):
    if not descriptions:
        with open(os.path.join(GOD_ROOT, 'jsonData', 'ExampleAgeDescriptions1.json')) as fs:
            descriptions = json.load(fs)
    descriptions = json.dumps(descriptions, indent=4)
    return 'var d = {};\n\nexports.d = d;'.format(descriptions)

def generate_model(events=None):
    if not events:
        with open(os.path.join(GOD_ROOT, 'jsonData', 'ExampleEvents1.json')) as fs:
            events = json.load(fs)

    intents = [
        {
            'name': 'AMAZON.{}Intent'.format(amazon_name),
            'samples': [],
        }
        for amazon_name in [
            'Cancel',
            'Help',
            'No',
            'Yes',
            'Stop',
        ]
    ]

    intent_set = set()
    for event in events:
        for intent in [ event['iplus'], event['iminus'] ]:
            if intent not in intent_set:
                intents.append({
                    'name': '{}_intent'.format(intent.replace(' ', '')),
                    'samples': [intent],
                })
                intent_set.add(intent)

    return {
        "interactionModel": {
            "languageModel": {
                "invocationName": "god",
                "intents": intents,
            },
        }
    }

def generate_functions(model=None):
    output_lines = []

    if model is None:
        with open(os.path.join(GOD_ROOT, 'models', 'en-US.json')) as fs:
            model = json.load(fs)

    intents = model['interactionModel']['languageModel']['intents']

    for intent in intents:
        name = intent['name']
        samples = intent['samples']
        samples = ','.join([
            '"{}"'.format(sample)
            for sample in samples
        ])

        if 'AMAZON' not in name:
            function_output = '\n'.join([
                "'{}': function () {{".format(name),
                "   var intent_samples = new Array({});".format(samples),
                "   this.emitWithState('VerifyTheCurrentIntent', intent_samples);",
                "}",
            ])
            output_lines.append(function_output)
    return ',\n'.join(output_lines)


if __name__ == '__main__':
    model = generate_model()
    q_file = generate_q()
    d_file = generate_d()

    functions = generate_functions(model)
    i_file = generate_i(functions)

    with open(os.path.join(GOD_ROOT, 'models', 'en-US.json'), 'w') as fs:
        json.dump(model, fs, indent=4)

    with open(os.path.join(GOD_ROOT, 'lambda', 'custom', 'q.js'), 'w') as fs:
        fs.write(q_file)

    with open(os.path.join(GOD_ROOT, 'lambda', 'custom', 'd.js'), 'w') as fs:
        fs.write(d_file)

    with open(os.path.join(GOD_ROOT, 'lambda', 'custom', 'i.js'), 'w') as fs:
        fs.write(i_file)
