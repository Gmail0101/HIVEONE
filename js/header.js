/*GNB */

$("#header").html(`
    <div class="head">

        <div class="logo">
          <img onclick="location.href='../index.html';" style="cursor:pointer" src="../images/header/logo.png" alt="로고">
        </div>

        <div class="gnb">
          <ul class="menu">
            <li><a href="../aboutUs.html">COMPANY</a>
              <ul class="submenu">
                <li><a href="../aboutUs.html">회사개요</a></li>
                <li><a href="../greetings.html">인사말</a></li>
                <li><a href="../tree.html">조직도</a></li>
              </ul>
            </li>
            <li><a href="../business.html">BUSINESS</a>
              <ul class="submenu">
                <li><a href="../business.html">주요제품</a></li>
                <li><a href="../technology.html">기술개발</a></li>
                <li><a href="../plant.html">주요설비</a></li>
                <li><a href="../gallery.html">기술보유현황</a></li>
              </ul>
            </li>
            <li><a href="../email.html">CONTACT US</a>
              <ul class="submenu">
                <li><a href="../email.html">문의하기</a></li>
                <li><a href="../map.html">오시는길</a></li>
              </ul>
            </li>
          </ul>
        </div>
`)