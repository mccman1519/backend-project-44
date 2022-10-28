#!/usr/bin/env node
import { engine } from '../src/index.js';
import brainGcd from '../src/games/gcd.js';

engine.play(brainGcd);
