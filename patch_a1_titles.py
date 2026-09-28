import re
import codecs

filepath = "data/curriculum/a1.ts"

with codecs.open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    (r'"id":\s*"a1_selamlasma",\s*"title":\s*"[^"]*",', 
     r'"id": "a1_selamlasma",\n      "title": { "tr": "Selamlaşma", "en": "Greetings & Introductions", "ar": "التحيات والتعارف", "fa": "احوال‌پرسی و معرفی", "ru": "Приветствия и знакомства" },'),
     
    (r'"id":\s*"a1_pazar",\s*"title":\s*"[^"]*",', 
     r'"id": "a1_pazar",\n      "title": { "tr": "Pazar", "en": "Market & Food", "ar": "السوق والطعام", "fa": "بازار و غذا", "ru": "Рынок и еда" },'),
     
    (r'"id":\s*"a1_ev_aile",\s*"title":\s*"[^"]*",', 
     r'"id": "a1_ev_aile",\n      "title": { "tr": "Ev & Aile", "en": "Home & Family", "ar": "المنزل والعائلة", "fa": "خانه و خانواده", "ru": "Дом и семья" },'),
     
    (r'"id":\s*"a1_kafe",\s*"title":\s*"[^"]*",', 
     r'"id": "a1_kafe",\n      "title": { "tr": "Kafe & Restoran", "en": "Café & Restaurant", "ar": "مقهى ومطعم", "fa": "کافه و رستوران", "ru": "Кафе и ресторан" },'),
     
    (r'"id":\s*"a1_sayilar",\s*"title":\s*"[^"]*",', 
     r'"id": "a1_sayilar",\n      "title": { "tr": "Sayılar & Zaman", "en": "Numbers & Time", "ar": "الأرقام والوقت", "fa": "اعداد و زمان", "ru": "Числа и время" },')
]

for pat, repl in replacements:
    content = re.sub(pat, repl, content, count=1)

with codecs.open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated A1 subtitles!")
