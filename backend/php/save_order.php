<?php
include __DIR__ . '/connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama     = $_POST['nama'];
    $produk   = $_POST['produk'];
    $jumlah   = $_POST['jumlah'];
    $alamat   = $_POST['alamat'];
    $telepon  = $_POST['telepon'];

    $sql = "INSERT INTO pesanan (nama, produk, jumlah, alamat, telepon)
            VALUES ('$nama', '$produk', '$jumlah', '$alamat', '$telepon')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Pesanan berhasil dikirim!'); window.location.href='../../frontend/order.html';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
