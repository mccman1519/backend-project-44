#!/usr/bin/env node
import { play } from '../src/index.js';
import { textRule, quiz, expected } from '../src/games/progression.js';

play({ textRule, quiz, expected });
