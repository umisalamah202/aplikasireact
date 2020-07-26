import React from 'react'
import {Card, CardTitle,CardImgOverlay,CardImg } from 'reactstrap';


function Kategori() {
    
    return (
        <div><Card inverse>
        <CardImg width="100%" src="https://petrusadisusilo.files.wordpress.com/2013/05/1.jpg" alt="Card image cap" />
        <CardImgOverlay>
            <br/>
            <Card  body inverse color="secondary">
                <h1>Bedasarkan Jenis Laptop</h1>
                </Card>
                <br/>
            
           
          <h1><CardTitle>Laptop Mainstream</CardTitle></h1>
          <CardTitle color="info">Seringkali kita mendengar istilah ini, dan ternyata banyak dari kita tidak mengetahui secara pasti mengenai hal tersebut. Pilihan mainstream biasanya berkaitan dengan pengguna pada umumnya, termasuk juga pada anggaran terbatas. Entah anda seringkali menjalankan beberapa aplikasi umum seperti office, browsing web, menonton video maupun gaming kasual yang tidak berat. Hal tersebut berarti anda termasuk sebagai pengguna mainstream, sehingga kehadiran laptop mainstream benar-benar menjadi pilihan yang sangat ideal untuk bisa memenuhi semua kebutuhan umum anda.</CardTitle>
          <h1><CardTitle>Ultrabook</CardTitle></h1>
          <CardTitle>Jika anda menginginkan laptop yang jauh lebih tipis, kinerja baterai yang handal, bentuk desain yang terbaik dengan kualitas bahan yang istimewa, maka kehadiran ultrabook merupakan jawabannya. Ini merupakan pilihan premium yang hadir pada sebuah laptop. Produsen lebih memfokuskan penggunaan ultrabook sebagai pilihan laptop dengan tingkat mobilitas yang terbaik. Sehingga, pilihan laptop ini benar-benar sangat ideal untuk mereka yang memiliki akses mobilitas tinggi.</CardTitle>
          
        
          <h1>Laptop Gaming</h1>
          <CardTitle>Laptop ini biasanya lebih difokuskan pada pilihan spesifikasi yang cukup tangguh, seperti kehadiran prosesor yang jauh lebih baik dan pilihan grafis diskrit yang memukau. Meskipun begitu, ada banyak pilihan kelas pada seri ini, mulai dari kisaran yang sangat terjangkau hingga pada pilihan super high-end dengan spesifikasi yang mendahaga.</CardTitle>
       
        
          <h1>Workstation Laptop</h1>
          <CardTitle> Pilihan laptop ini benar-benar dihadirkan dengan spesifikasi yang super tangguh, bahkan anda akan melihat pilihan prosesor dan grafis khusus untuk beberapa aplikasi menuntut, seperti Intel Xeon, Nvidia Quadro dan sebagainya. Dan jangan harap untuk melihat pilihan harga terjangkau, ini lebih pada kelas elit untuk pilihan pengguna khusus.</CardTitle>
      
        </CardImgOverlay>
      </Card>
      </div>
    )
}

export default Kategori;