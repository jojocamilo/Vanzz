# Data buah Andi
fruits = [
    {"fruitId": 1, "fruitName": "Apel", "fruitType": "IMPORT", "stock": 10},
    {"fruitId": 2, "fruitName": "Kurma", "fruitType": "IMPORT", "stock": 20},
    {"fruitId": 3, "fruitName": "apel", "fruitType": "IMPORT", "stock": 50},
    {"fruitId": 4, "fruitName": "Manggis", "fruitType": "LOCAL", "stock": 100},
    {"fruitId": 5, "fruitName": "Jeruk Bali", "fruitType": "LOCAL", "stock": 10},
    {"fruitId": 5, "fruitName": "KURMA", "fruitType": "IMPORT", "stock": 20},
    {"fruitId": 5, "fruitName": "Salak", "fruitType": "LOCAL", "stock": 150}
]

def get_unique_fruits(fruits_data):
# Soal 1: Buah apa saja yang dimiliki Andi?
    unique_fruits = set()
    for fruit in fruits_data:
        normalized_name = fruit["fruitName"].lower()
        unique_fruits.add(normalized_name)
    
    return sorted(list(unique_fruits))

def analyze_containers_by_type(fruits_data):
# Soal 2: Buah apa saja yang ada di masing-masing wadah (fruitType)?
    containers = {}
    
    for fruit in fruits_data:
        fruit_type = fruit["fruitType"]
        fruit_name = fruit["fruitName"]
        
        if fruit_type not in containers:
            containers[fruit_type] = set()
        
        containers[fruit_type].add(fruit_name)
    
    # Convert sets to sorted lists untuk output yang konsisten
    for fruit_type in containers:
        containers[fruit_type] = sorted(list(containers[fruit_type]))
    
    return containers

def calculate_stock_by_type(fruits_data):
# Soal 3: Berapa total stock di masing-masing wadah (fruitType)?
    stock_by_type = {}
    
    for fruit in fruits_data:
        fruit_type = fruit["fruitType"]
        stock = fruit["stock"]
        
        if fruit_type not in stock_by_type:
            stock_by_type[fruit_type] = 0
        
        stock_by_type[fruit_type] += stock
    
    return stock_by_type

def analyze_data_issues(fruits_data):
    # Soal 4: Komentar terkait kasus di atas
    issues = []
    
    fruit_ids = [fruit["fruitId"] for fruit in fruits_data]
    duplicate_ids = [id for id in set(fruit_ids) if fruit_ids.count(id) > 1]
    if duplicate_ids:
        issues.append(f"Duplikasi fruitId ditemukan: {duplicate_ids}")

    fruit_names = [fruit["fruitName"] for fruit in fruits_data]
    normalized_names = {}
    for name in fruit_names:
        normalized = name.lower()
        if normalized not in normalized_names:
            normalized_names[normalized] = []
        normalized_names[normalized].append(name)
    
    inconsistent_names = {k: v for k, v in normalized_names.items() if len(v) > 1}
    if inconsistent_names:
        issues.append("Inkonsistensi penulisan nama buah ditemukan:")
        for normalized, variants in inconsistent_names.items():
            issues.append(f"  - '{normalized}': {variants}")

    zero_stock = [fruit["fruitName"] for fruit in fruits_data if fruit["stock"] <= 0]
    if zero_stock:
        issues.append(f"Buah dengan stock nol atau negatif: {zero_stock}")
    
    return issues

print("=" * 60)
print("ANALISIS DATA BUAH ANDI")
print("=" * 60)

# Soal 1
print("\n1. BUAH YANG DIMILIKI ANDI:")
unique_fruits = get_unique_fruits(fruits)
for i, fruit in enumerate(unique_fruits, 1):
    print(f"   {i}. {fruit.title()}")
print(f"\nTotal: {len(unique_fruits)} jenis buah unik")

# Soal 2
print("\n2. ANALISIS WADAH BERDASARKAN TIPE BUAH:")
containers = analyze_containers_by_type(fruits)
print(f"Jumlah wadah yang dibutuhkan: {len(containers)} wadah")

for fruit_type, fruit_list in containers.items():
    print(f"\nWadah {fruit_type}:")
    for i, fruit in enumerate(fruit_list, 1):
        print(f"   {i}. {fruit}")

# Soal 3
print("\n3. TOTAL STOCK PER WADAH:")
stock_by_type = calculate_stock_by_type(fruits)
total_stock = 0

for fruit_type, stock in stock_by_type.items():
    print(f"   Wadah {fruit_type}: {stock} buah")
    total_stock += stock

print(f"\nTotal keseluruhan stock: {total_stock} buah")

# Soal 4
print("\n4. KOMENTAR DAN ANALISIS DATA:")
issues = analyze_data_issues(fruits)

if issues:
    print("Masalah yang ditemukan dalam data:")
    for i, issue in enumerate(issues, 1):
        print(f"   {i}. {issue}")
else:
    print("   Tidak ada masalah signifikan ditemukan dalam data.")

# Rekomendasi
print("\nREKOMENDASI:")
print("   1. Standardisasi penulisan nama buah (konsisten case)")
print("   2. Pastikan fruitId unik untuk setiap entry")
print("   3. Implementasi validasi data untuk mencegah duplikasi")
print("   4. Pertimbangkan menggunakan sistem barcode atau SKU unik")

print("\n" + "=" * 60)
