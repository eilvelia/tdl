#!/usr/bin/env bash

# Requires fd and sd

fd LICENSE | xargs -L 1 sd '2018-\d{4}' "2018-$(date '+%Y')"
