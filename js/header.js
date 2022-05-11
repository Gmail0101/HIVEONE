/*GNB */

$("#header").html(`
    <div class="head">

        <div class="logo">
          <img onclick="location.href='./index.html';" style="cursor:pointer" src="./images/header/logo.png" alt="로고">
        </div>

        <div class="gnb">
          <ul class="menu">
            <li><a href="./aboutUs.html">COMPANY</a>
              <ul class="submenu">
                <li><a href="./aboutUs.html">회사개요</a></li>
                <li><a href="./greetings.html">인사말</a></li>
                <li><a href="./tree.html">조직도</a></li>
              </ul>
            </li>
            <li><a href="./business.html">BUSINESS</a>
              <ul class="submenu">
                <li><a href="./business.html">주요제품</a></li>
                <li><a href="./technology.html">기술개발</a></li>
                <li><a href="./plant.html">주요설비</a></li>
                <li><a href="./gallery.html">기술보유현황</a></li>
              </ul>
            </li>
            <li><a href="./email.html">CONTACT US</a>
              <ul class="submenu">
                <li><a href="./email.html">문의하기</a></li>
                <li><a href="./map.html">오시는길</a></li>
              </ul>
            </li>
          </ul>

        </div>


        <div class="sidebar visible-sm visible-xs">
          <span></span>
          <span></span>
          <span></span>
         </div>

         <div class="sidebar-wrap visible-sm visible-xs">
            <div class="sidebar-close">
              <span>&times;</span>
            </div>
            <div class="clearfix"></div>
            <ul class="sidebar-menu">
              <li class="have-children"><a href="#"><span class="fa"></span>COMPANY</a>
                <ul>
                  <li><a href="#">회사개요</a></li>
                  <li><a href="#">인사말</a></li>
                  <li><a href="#">조직도</a></li>
                </ul>
              </li>
              <li class="have-children"><a href="#"><span class="fa"></span>BUSINESS</a>
                <ul>
                  <li><a href="#">주요제품</a></li>
                  <li><a href="#">기술개발</a></li>
                  <li><a href="#">주요설비</a></li>
                  <li><a href="#">기술보유현황</a></li>
                </ul>
              </li>
              <li class="have-children"><a href="#"><span class="fa"></span>CONTACT US</a>
                <ul>
                  <li><a href="#">문의하기</a></li>
                  <li><a href="#">오시는길</a></li>
                </ul>
              </li>
             </ul>

         </div>
`)