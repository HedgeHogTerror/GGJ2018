#!/usr/bin/env python

import json
import os

GOD_ROOT = os.path.join(os.path.dirname(__file__), '..')

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
        for intent in [ event['intent +'], event['Intent -'] ]:
            if intent not in intent_set:
                intents.append({
                    'name': '{}_intent'.format(intent),
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
    print(json.dumps(model))
    print(generate_functions(model))

    with open(os.path.join(GOD_ROOT, 'models', 'en-US.json'), 'w') as fs:
        json.dump(model, fs)
