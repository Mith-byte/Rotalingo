import json

translations = {
    'en': {
        'verify_title': 'Registration successful!',
        'verify_desc': 'Please click the confirmation link sent to {email} to activate your account.'
    },
    'ar': {
        'verify_title': 'تم التسجيل بنجاح!',
        'verify_desc': 'الرجاء النقر على رابط التأكيد المرسل إلى {email} لتفعيل حسابك.'
    },
    'fa': {
        'verify_title': 'ثبت نام با موفقیت انجام شد!',
        'verify_desc': 'لطفاً برای فعال‌سازی حساب کاربری خود روی لینک تأیید ارسال شده به {email} کلیک کنید.'
    },
    'ru': {
        'verify_title': 'Регистрация успешна!',
        'verify_desc': 'Пожалуйста, перейдите по ссылке для подтверждения, отправленной на {email}, чтобы активировать ваш аккаунт.'
    }
}

for lang, content in translations.items():
    with open(f"messages/{lang}.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    if "auth" not in data:
        data["auth"] = {}
        
    data["auth"].update(content)
    
    with open(f"messages/{lang}.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Auth translations updated.")
