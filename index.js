#!/usr/bin/env node

require('./container')
    .build('cleaner')
    .clean();