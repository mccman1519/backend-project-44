#!/usr/bin/env node
import { engine } from '../src/index.js';
import brainCalc from '../src/games/calc.js';

engine.play(brainCalc);
