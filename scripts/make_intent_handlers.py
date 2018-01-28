#!/usr/bin/env python

import json
import os

GOD_ROOT = os.path.join('..', os.path.dirname(__file__))

if __name__ == '__main__':
    output_lines = []
    with open(os.path.join(GOD_ROOT, 'models', 'en-US.json')) as fs:
        models = json.load(fs)
        intents = models['interactionModel']['languageModel']['intents']

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
                    "   this.context.samples = new Array({});".format(samples),
                    "   this.emitWithState('VerifyTheCurrentIntent');",
                    "}",
                ])
                output_lines.append(function_output)

    print(',\n'.join(output_lines))
