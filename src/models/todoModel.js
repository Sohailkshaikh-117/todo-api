const todoAll = {
    user123: {
        metrics: {
            productivity_metrics: {
                pendingTodo_counts: {
                    low_priority: 0,
                    medium_priority: 0,
                    high_priority: 0,
                    critical_priority: 0,
                    total: 0,
                },
                completedTodo_counts: {
                    low_priority: 0,
                    medium_priority: 0,
                    high_priority: 0,
                    critical_priority: 0,
                    total: 0,
                },
                percentageCompletions: {
                    low_priority: 0,
                    medium_priority: 0,
                    high_priority: 0,
                    critical_priority: 0,
                    total: 0,
                },
                total: 0,
            },
            timeBased_metrics: {
                average_completion_time: '23 hours',
                active_day_streak_count: 0,
                first_added_todo: 'date-time',
                last_added_todo: 'date-time',
                date_vise_count: {
                    '12 March 2026': 2,
                    '13 March 2026': 2,
                    '15 March 2026': 2,
                },
                weekDay_vise_count: {
                    'Monday': 2,
                    'Tuesday': 2,
                },
                most_productive_week_day: ['Monday', 'Tuesday'],
                most_productive_date: ['dd-mm-yyyy', 'dd-mm-yyyy'],
            },
            system_metrics: {
                database_file_size: '',
                cache_size: '',
            }
        },
        filters: {
            priorities: ["low", "medium", "high", "critical"],
            statuses: ["pending", "completed", "deleted"],
            tags: ["project", "work", "shopping", "health"] // just add here on every write operation, and dont delete on every delete operation
        },
        todoList: [
            {
                todo_title: 'todo title text', // fallback as (date-time)
                todo_description: 'todo description', // fallback as 'Note added on (date-time)'
                added_on_date: 'date-time',
                completed_on_date: 'date-time',
                priority: 'low / high / medium / critical', // fallback as low
                status: 'pending / completed / deleted',
                tag: 'important / urgent / notes / appointment / work / project /...', // can be anything, limit to one word at a time
            }
        ],
    }
}