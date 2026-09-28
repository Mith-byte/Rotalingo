import json
import os

locales = {
    'en': {
        "weekly_rank": "Weekly Rank",
        "top_50": "Top 50 Learners this week"
    },
    'ar': {
        "weekly_rank": "التصنيف الأسبوعي",
        "top_50": "أفضل 50 متعلماً هذا الأسبوع"
    },
    'ru': {
        "weekly_rank": "Еженедельный рейтинг",
        "top_50": "Топ-50 учеников на этой неделе"
    },
    'fa': {
        "weekly_rank": "رتبه‌بندی هفتگی",
        "top_50": "۵۰ زبان‌آموز برتر این هفته"
    }
}

for lang, strings in locales.items():
    filepath = f"messages/{lang}.json"
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        if "leaderboard" not in data:
            data["leaderboard"] = {}
            
        data["leaderboard"].update(strings)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Updated {filepath}")
