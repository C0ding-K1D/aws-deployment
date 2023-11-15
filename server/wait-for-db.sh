#!/bin/sh

# Define your RDS endpoint and port
RDS_HOST="database-1.c3klvvtcxsa5.us-east-2.rds.amazonaws.com"
RDS_PORT=5432

wait_for_db() {
    while ! nc -z "$RDS_HOST" "$RDS_PORT"; do
        echo "Waiting for PostgreSQL to start at $RDS_HOST:$RDS_PORT..."
        sleep 1
    done
    echo "PostgreSQL at $RDS_HOST:$RDS_PORT is up and running."
}

wait_for_db


npx prisma migrate dev --name dbinit
npx prisma generate
node server.js