#!/usr/bin/env bash

# Requires fd and sd

fd LICENSE | xargs -L 1 sd ' (\d{4})-\d{4} ' " \$1-$(date '+%Y') "
