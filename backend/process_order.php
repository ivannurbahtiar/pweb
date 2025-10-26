<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = $_POST["nama"];
  $produk = $_POST["produk"];
  $jumlah = $_POST["jumlah"];
  $kontak = $_POST["kontak"];

  $data = "Nama: $nama | Produk: $produk | Jumlah: $jumlah | Kontak: $kontak\n";
  file_put_contents("orders.txt", $data, FILE_APPEND);

  echo "<h2>Pesanan Berhasil Dikirim!</h2>";
  echo "<a href='../order.html'>Kembali</a>";
}
?>
