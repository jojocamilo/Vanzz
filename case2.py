from typing import List, Dict, Optional

# Definisi struktur data komentar
class IComment:
    def __init__(self, comment_id: int, comment_content: str, replies: Optional[List['IComment']] = None):
        self.comment_id = comment_id
        self.comment_content = comment_content
        self.replies = replies or []

comments = [
    IComment(
        comment_id=1,
        comment_content='Hai',
        replies=[
            IComment(
                comment_id=11,
                comment_content='Hai juga',
                replies=[
                    IComment(comment_id=111, comment_content='Haai juga hai jugaa'),
                    IComment(comment_id=112, comment_content='Haai juga hai jugaa')
                ]
            ),
            IComment(
                comment_id=12,
                comment_content='Hai juga',
                replies=[
                    IComment(comment_id=121, comment_content='Haai juga hai jugaa')
                ]
            )
        ]
    ),
    IComment(comment_id=2, comment_content='Halooo')
]

def hitung_total_komentar(comments: List[IComment]) -> int:
    """
    Menghitung total komentar termasuk semua balasan menggunakan rekursi.
    
    Args:
        comments (List[IComment]): Daftar komentar
        
    Returns:
        int: Total jumlah komentar
    """
    total = 0
    
    for comment in comments:

        total += 1

        if comment.replies:
            total += hitung_total_komentar(comment.replies)
    
    return total

def hitung_total_komentar_iteratif(comments: List[IComment]) -> int:
    """
    Alternatif implementasi menggunakan stack (iteratif) untuk menghindari rekursi.
    
    Args:
        comments (List[IComment]): Daftar komentar
        
    Returns:
        int: Total jumlah komentar
    """
    if not comments:
        return 0
    
    total = 0
    stack = comments.copy() 
    
    while stack:
        current_comment = stack.pop()
        total += 1

        if current_comment.replies:
            stack.extend(current_comment.replies)
    
    return total

def tampilkan_struktur_komentar(comments: List[IComment], indent: int = 0):
    """
    Menampilkan struktur komentar untuk debugging.
    
    Args:
        comments (List[IComment]): Daftar komentar
        indent (int): Level indentasi untuk tampilan hierarkis
    """
    for comment in comments:
        print("  " * indent + f"ID: {comment.comment_id} - {comment.comment_content}")
        if comment.replies:
            tampilkan_struktur_komentar(comment.replies, indent + 1)

if __name__ == "__main__":
    print("=== Struktur Komentar ===")
    tampilkan_struktur_komentar(comments)
    
    print(f"\n=== Hasil Perhitungan ===")
    total_rekursif = hitung_total_komentar(comments)
    total_iteratif = hitung_total_komentar_iteratif(comments)
    
    print(f"Total komentar (rekursif): {total_rekursif}")
    print(f"Total komentar (iteratif): {total_iteratif}")

    print(f"\nVerifikasi: Total komentar seharusnya 7")
    print(f"Hasil benar: {total_rekursif == 7}")