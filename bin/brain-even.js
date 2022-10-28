#!/usr/bin/env node
import { play } from '../src/index.js';
import { textRule, quiz, expected } from '../src/games/even.js';

play({ textRule, quiz, expected });
