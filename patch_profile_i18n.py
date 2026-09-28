import json
import os

locales = {
    'en': {
        "title": "Your Profile",
        "streak": "Streak",
        "hearts": "Hearts",
        "coins": "Coins",
        "logout": "Log Out"
    },
    'ar': {
        "title": "ملفك الشخصي",
        "streak": "أيام متتالية",
        "hearts": "قلوب",
        "coins": "عملات",
        "logout": "تسجيل الخروج"
    },
    'ru': {
        "title": "Ваш профиль",
        "streak": "Серия",
        "hearts": "Жизни",
        "coins": "Монеты",
        "logout": "Выйти"
    },
    'fa': {
        "title": "پروفایل شما",
        "streak": "روزهای متوالی",
        "hearts": "قلب‌ها",
        "coins": "سکه ها",
        "logout": "خروج"
    }
}

for lang, strings in locales.items():
    filepath = f"messages/{lang}.json"
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        if "profile" not in data:
            data["profile"] = {}
            
        data["profile"].update(strings)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Updated {filepath}")
