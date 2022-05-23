import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>East Marketplace</title>
        <meta name="description" content="East Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <!-- header area start  -->
      <header class="header1 oc-transparent-header">

         <div id="header-sticky" class="header-main header-main1">
            <div class="container header-container">
               <div class="row align-items-center">
                  <div class="col-xl-2 col-lg-2 col-md-4 col-4">
                     <div class="header-main-left">
                        <div class="header-logo header1-logo">
                           <a href="index.html" class="logo-bb"><img style="width: 60px; height : 60px" src="assets/img/logo/logo.png"
                                 alt="logo-img"></a>
                           <a href="index.html" class="logo-bw"><img style="width: 60px; height : 60px" src="assets/img/logo/logo.png"
                                 alt="logo-img"></a>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-md-8 col-8">
                     <div class="header-main-right">
                        <div class="main-menu main-menu1 d-none d-lg-block">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><a href="explore-arts.html">Explore</a></li>
                                 <li><a href="creators.html">Creators</a></li>
                                 <li class="menu-item-has-children"><a href="#">Links Available</a>
                                    <ul class="sub-menu">
                                       <li class="menu-item-has-children"><a href="creator-profile.html">Creator</a>
                                          <ul class="sub-menu">
                                             <li><a href="creator-profile.html">Creator Profile</a></li>
                                             <li><a href="creator-profile-info-personal.html">Creator Personal Info</a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li class="menu-item-has-children"><a href="art-details.html">Art</a>
                                          <ul class="sub-menu">
                                             <li><a href="art-details.html">Art Details</a></li>
                                             <li><a href="upload-category.html">Upload Category</a></li>
                                             <li><a href="upload.html">Upload</a></li>
                                          </ul>
                                       </li>
                                       <li><a href="faq.html">FAQ</a></li>
                                       <li><a href="register.html">Register</a></li>
                                       <li><a href="login.html">Login</a></li>
                                       <li><a href="terms.html">Terms</a></li>
                                       <li><a href="wallet-connect.html">Wallet Connect</a></li>
                                       <li><a href="activity.html">Activity</a></li>
                                       <li><a href="art-ranking.html">Ranking</a></li>
                                       <li><a href="error-404.html">404 page</a></li>
                                    </ul>
                                 </li>
                                 <li><a href="forum.html">Forum</a></li>
                                 <li><a href="contact.html">Contact</a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                        <form action="#" class="filter-search-input header-search d-none d-xl-inline-block">
                           <input type="text" placeholder="Search keyword">
                           <button><i class="fal fa-search"></i></button>
                        </form>
                        <div class="header-btn ml-20 d-none d-xxl-inline-block">
                           <a href="wallet-connect.html" class="fill-btn">Connect Wallet</a>
                        </div>
                        <div class="profile-item profile-item-header ml-20 d-none d-md-inline-block pos-rel">
                           <div class="profile-img pos-rel">
                              <div class="profile-action">
                                 <ul>
                                    <li><a href="creator-profile-info-personal.html"><i
                                             class="fal fa-user"></i>Profile</a>
                                    </li>
                                    <li><a href="login.html"><i class="fal fa-sign-out"></i>Logout</a></li>
                                 </ul>
                              </div>
                              <img src="assets/img/profile/profile4.jpg" alt="profile-img">
                              <div class="profile-verification verified">
                                 <i class="fas fa-check"></i>
                              </div>
                           </div>
                        </div>
                        <div class="menu-bar d-xl-none ml-20">
                           <a class="side-toggle" href="javascript:void(0)">
                              <div class="bar-icon">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <!-- header area end -->

      <!-- side toggle start -->
      <div class="fix">
         <div class="side-info">
            <div class="side-info-content">
               <div class="offset-widget offset-logo mb-40">
                  <div class="row align-items-center">
                     <div class="col-9">
                        <a href="index.html">
                           <img style="width: 60px; height : 60px"  src="assets/img/logo/logo.png" alt="Logo">
                        </a>
                     </div>
                     <div class="col-3 text-end"><button class="side-info-close"><i class="fal fa-times"></i></button>
                     </div>
                  </div>
               </div>
               <div class="mobile-menu d-lg-none fix"></div>
               <div class="offset-profile-action d-md-none">
                  <div class="offset-widget mb-40">
                     <div class="profile-item profile-item-header into-sidebar d-md-none">
                        <div class="profile-img pos-rel">
                           <div class="profile-action">
                              <ul>
                                 <li><a href="creator-profile-info-personal.html"><i class="fal fa-user"></i>Profile</a>
                                 </li>
                                 <li><a href="login.html"><i class="fal fa-sign-out"></i>Logout</a></li>
                              </ul>
                           </div>
                           <img src="assets/img/profile/profile4.jpg" alt="profile-img">
                           <div class="profile-verification verified">
                              <i class="fas fa-check"></i>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div class="offset-widget offset_searchbar mb-30">
                  <form action="#" class="filter-search-input">
                     <input type="text" placeholder="Search keyword">
                     <button><i class="fal fa-search"></i></button>
                  </form>
               </div>
               <div class="offset-widget mb-40">
                  <a href="upload-category.html" class="fill-btn">Upload Items</a>
               </div>
               <div class="offset-widget mb-40 d-none d-lg-block">
                  <div class="info-widget">
                     <h4 class="offset-title mb-20 d-none">Contact Info</h4>
                     <p class="mb-30">Non-fungible tokens and their smart contracts allow for detailed attributes to be
                        added, like the identity of the owner,
                        rich metadata, or secure file links.</p>
                     <a href="contact.html" class="fill-btn">Contact Us</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="offcanvas-overlay"></div>
      <div class="offcanvas-overlay-white"></div>
      <!-- side toggle end -->

      <!-- banner area start  -->
      <div class="banner-area banner-area1 pos-rel fix">
         <div class="swiper-container">
            <div class="swiper-wrapper">
               <div class="swiper-slide">
                  <div class="single-banner single-banner-1 banner-900 d-flex align-items-center pos-rel mb-30">
                     <img src="assets/img/banner/b1-shape1.png" alt="" class="b1-shape1">
                     <div class="banner-bg" data-background="assets/img/banner/oc-banner-bg.png"></div>
                     <div class="banner-bg-light" data-background="assets/img/banner/oc-banner-bg-light.png"></div>
                     <div class="container pos-rel">
                        <div class="row align-items-center justify-content-between">
                           <div class="col-xl-6 col-lg-6">
                              <div class="banner-content banner-content1 banner-content1-1 pt-0">
                                 <h1 data-animation="fadeInUp" data-delay=".3s" class="mb-25 font-prata">
                                    Discover Digital
                                    Artwork and Best <span>NFTs</span></h1>
                                 <p data-animation="fadeInUp" data-delay=".5s" class="mb-40">A unique marketplace for both digital, and redeemable NFTs embedded company’s share and assets. </p>
                                 <div class="banner-btn mb-105" data-animation="fadeInUp" data-delay=".7s">
                                    <a href="explore-arts.html" class="fill-btn">Explore Now</a>
                                    <div class="oc-banner-video">
                                       <a href="https://youtu.be/0a82PkDE-AM" class="popup-video"><i
                                             class="fas fa-play"></i></a>
                                       <span>Watch Video</span>
                                    </div>
                                 </div>
                                 <div class="oc-banner-counter">
                                    <div class="art-meta-item">
                                       <div class="art-meta-notice"><span class="counter">85</span>k+</div>
                                       <div class="art-meta-type">Digital Artworks</div>
                                    </div>
                                    <div class="art-meta-item">
                                       <div class="art-meta-notice"><span class="counter">25</span>k+</div>
                                       <div class="art-meta-type">Global Creators</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-5 col-lg-6">
                              <div class="oc-banner-img pos-rel">
                                 <div class="oc-banner-img-1 stuff">
                                    <img class="" data-depth=".5" src="assets/img/banner/oc-banner-1.jpg"
                                       alt="img not found">
                                 </div>
                                 <div class="oc-banner-img-2 stuff2">
                                    <img class="" data-depth=".6" src="assets/img/banner/oc-banner-2.jpg"
                                       alt="img not found">
                                 </div>

                                 <div class="oc-banner-img-3 stuff3">
                                    <img class="" data-depth=".3" src="assets/img/banner/oc-banner-3.jpg"
                                       alt="img not found">
                                 </div>

                                 <div class="oc-banner-img-4 stuff4">
                                    <img class="" data-depth=".5" src="assets/img/banner/oc-banner-4.jpg"
                                       alt="img not found">
                                 </div>
                                 <div class="oc-banner-client-wrapper stuff5">
                                    <div class="oc-banner-client " data-depth=".3">
                                       <div class="q-meta-item">
                                          <div class="q-meta-viewed-members">
                                             <a href="creator-profile.html"><img src="assets/img/profile/profile1.jpg"
                                                   alt="profile-img"></a>
                                             <a href="creator-profile.html"><img src="assets/img/profile/profile2.jpg"
                                                   alt="profile-img"></a>
                                             <a href="creator-profile.html"><img src="assets/img/profile/profile3.jpg"
                                                   alt="profile-img"></a>
                                             <a href="creator-profile.html"><img src="assets/img/profile/profile4.jpg"
                                                   alt="profile-img"></a>
                                             <a href="creator-profile.html"><img src="assets/img/profile/profile5.jpg"
                                                   alt="profile-img"></a>
                                          </div>
                                          <div class="q-meta-viewed-members-count">
                                             <span class="q-meta-views">More Than</span>
                                             <span class="q-meta-type">25k+</span>
                                          </div>
                                       </div>
                                       <p>Digital art creators and sellers joined us to sale and create their own NFT to
                                          our marketplace</p>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- If we need navigation buttons -->
            <div class="slider-nav d-none">
               <div class="slider-button-prev"><i class="fal fa-long-arrow-left"></i></div>
               <div class="slider-button-next"><i class="fal fa-long-arrow-right"></i></div>
            </div>
         </div>
      </div>
      <!-- banner area end  -->

      <!-- walet area start  -->
      <section class="oc-wallet-area pt-110">
         <div class="container">
            <div class="row wow fadeInUp">
               <div class="col-12">
                  <div class="section-title1 pos-rel text-center mb-40">
                     <h2 class="section-main-title1">Set Your Wallet</h2>
                     <p>Here are a few reasons why you should choose East</p>
                  </div>
               </div>
            </div>
            <div class="row wow fadeInUp justify-content-center">
               <div class="col-xl-10">
                  <div class="row">
                     <div class="col-xl-2 wallet-col-width-20">
                        <a href="wallet-connect.html">
                           <div class="oc-wallet text-center mb-30">
                              <div class="oc-wallet-icon text-center">
                                 <img src="assets/img/wallet/oc-wallet-1.png" alt="img not found">
                              </div>
                              <h5 class="oc-wallet-title">Meta Mask</h5>
                           </div>
                        </a>
                     </div>
                     <div class="col-xl-2 wallet-col-width-20">
                        <a href="wallet-connect.html">
                           <div class="oc-wallet text-center mb-30">
                              <div class="oc-wallet-icon text-center">
                                 <img src="assets/img/wallet/oc-wallet-2.png" alt="img not found">
                              </div>
                              <h5 class="oc-wallet-title">Binance</h5>
                           </div>
                        </a>

                     </div>
                     <div class="col-xl-2 wallet-col-width-20">
                        <a href="wallet-connect.html">
                           <div class="oc-wallet text-center mb-30">
                              <div class="oc-wallet-icon text-center">
                                 <img src="assets/img/wallet/oc-wallet-3.png" alt="img not found">
                              </div>
                              <h5 class="oc-wallet-title">Formatic</h5>
                           </div>
                        </a>

                     </div>
                     <div class="col-xl-2 wallet-col-width-20">
                        <a href="wallet-connect.html">
                           <div class="oc-wallet text-center mb-30">
                              <div class="oc-wallet-icon text-center">
                                 <img src="assets/img/wallet/oc-wallet-4.png" alt="img not found">
                              </div>
                              <h5 class="oc-wallet-title">Autherum</h5>
                           </div>
                        </a>

                     </div>
                     <div class="col-xl-2 wallet-col-width-20">
                        <a href="wallet-connect.html">
                           <div class="oc-wallet text-center mb-30">
                              <div class="oc-wallet-icon text-center">
                                 <img src="assets/img/wallet/oc-wallet-5.png" alt="img not found">
                              </div>
                              <h5 class="oc-wallet-title">Coinbase</h5>
                           </div>
                        </a>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- walet area end  -->

      <!-- live-auction area start  -->
      <section class="live-auction-area pt-80 pb-100">
         <div class="container">
            <div class="row wow fadeInUp">
               <div class="col-lg-8">
                  <div class="section-title1 pos-rel">
                     <div class="live-blink"></div>
                     <h2 class="section-main-title1 mb-40 pl-35">Live Bids</h2>
                  </div>
               </div>
            </div>
            <div class="row wow fadeInUp">
               <div class="col-lg-12">
                  <div class="auction-wrapper pos-rel">
                     <div class="swiper-container auction-active">
                        <div class="swiper-wrapper">
                           <div class="swiper-slide">
                              <div class="art-item-single mb-30">
                                 <div class="art-item-wraper">
                                    <div class="art-item-inner">
                                       <div class="art-item-img pos-rel">
                                          <div class="tag-featured"><i class="fas fa-star"></i>Featured</div>
                                          <div class="art-action">
                                             <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                             <div class="art-action-like-count">2.5k+</div>
                                             <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                                          </div>
                                          <a href="art-details.html"><img src="assets/img/bids/oc-bids-1.jpg"
                                                alt="art-img"></a>
                                       </div>
                                       <div class="art-item-content pos-rel">
                                          <div class="auction-time-and-btn">
                                             <div class="art-auction-ends in-art-item" data-countdown="2022/10/25">
                                             </div>
                                          </div>
                                          <div class="art-3dots-menu">
                                             <div class="art-3dots-action">
                                                <ul>
                                                   <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                                   </li>
                                                   <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                                   </li>
                                                </ul>
                                             </div>
                                             <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                                          </div>
                                          <div class="artist">
                                             <div class="profile-img pos-rel">
                                                <a href="creator-profile.html"><img
                                                      src="assets/img/profile/profile2.jpg" alt="profile-img"></a>
                                                <div class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </div>
                                             </div>
                                             <div class="artist-id">@jobanico</div>
                                          </div>
                                          <h4 class="art-name"><a href="art-details.html">Bearded Man</a></h4>
                                          <div class="art-meta-info">
                                             <div class="art-meta-item">
                                                <div class="art-meta-type">Current Bid</div>
                                                <div class="art-price">83.46 ETH</div>
                                             </div>
                                             <div class="art-activity-btn">
                                                <button class="art-activity"><i
                                                      class="fal fa-waveform-path"></i>Activity</button>
                                             </div>
                                          </div>
                                          <a href="#" class="place-bid">Place Bid</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="art-item-single mb-30">
                                 <div class="art-item-wraper">
                                    <div class="art-item-inner">
                                       <div class="art-item-img pos-rel">
                                          <div class="art-action">
                                             <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                             <div class="art-action-like-count">2.5k+</div>
                                             <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                                          </div>
                                          <a href="art-details.html"><img src="assets/img/bids/oc-bids-2.jpg"
                                                alt="art-img"></a>
                                       </div>
                                       <div class="art-item-content pos-rel">
                                          <div class="auction-time-and-btn">
                                             <div class="art-auction-ends in-art-item" data-countdown="2022/09/10">
                                             </div>
                                          </div>
                                          <div class="art-3dots-menu">
                                             <div class="art-3dots-action">
                                                <ul>
                                                   <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                                   </li>
                                                   <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                                   </li>
                                                </ul>
                                             </div>
                                             <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                                          </div>
                                          <div class="artist">
                                             <div class="profile-img pos-rel">
                                                <a href="creator-profile.html"><img
                                                      src="assets/img/profile/profile7.jpg" alt="profile-img"></a>
                                                <div class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </div>
                                             </div>
                                             <div class="artist-id">@stephens</div>
                                          </div>
                                          <h4 class="art-name"><a href="art-details.html">Ornament Illustration</a></h4>
                                          <div class="art-meta-info">
                                             <div class="art-meta-item">
                                                <div class="art-meta-type">Current Bid</div>
                                                <div class="art-price">83.46 ETH</div>
                                             </div>
                                             <div class="art-activity-btn">
                                                <button class="art-activity"><i
                                                      class="fal fa-waveform-path"></i>Activity</button>
                                             </div>
                                          </div>
                                          <a href="#" class="place-bid">Place Bid</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="art-item-single mb-30">
                                 <div class="art-item-wraper">
                                    <div class="art-item-inner">
                                       <div class="art-item-img pos-rel">
                                          <div class="tag-featured"><i class="fas fa-star"></i>Featured</div>
                                          <div class="art-action">
                                             <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                             <div class="art-action-like-count">2.5k+</div>
                                             <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                                          </div>
                                          <a href="art-details.html"><img src="assets/img/bids/oc-bids-3.jpg"
                                                alt="art-img"></a>
                                       </div>
                                       <div class="art-item-content pos-rel">
                                          <div class="auction-time-and-btn">
                                             <div class="art-auction-ends in-art-item" data-countdown="2022/11/15">
                                             </div>
                                          </div>
                                          <div class="art-3dots-menu">
                                             <div class="art-3dots-action">
                                                <ul>
                                                   <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                                   </li>
                                                   <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                                   </li>
                                                </ul>
                                             </div>
                                             <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                                          </div>
                                          <div class="artist">
                                             <div class="profile-img pos-rel">
                                                <a href="creator-profile.html"><img
                                                      src="assets/img/profile/profile8.jpg" alt="profile-img"></a>
                                                <div class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </div>
                                             </div>
                                             <div class="artist-id">@johnson</div>
                                          </div>
                                          <h4 class="art-name"><a href="art-details.html">Easter Santa Clause</a></h4>
                                          <div class="art-meta-info">
                                             <div class="art-meta-item">
                                                <div class="art-meta-type">Current Bid</div>
                                                <div class="art-price">46.46 ETH</div>
                                             </div>
                                             <div class="art-activity-btn">
                                                <button class="art-activity"><i
                                                      class="fal fa-waveform-path"></i>Activity</button>
                                             </div>
                                          </div>
                                          <a href="#" class="place-bid">Place Bid</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="art-item-single mb-30">
                                 <div class="art-item-wraper">
                                    <div class="art-item-inner">
                                       <div class="art-item-img pos-rel">
                                          <div class="art-action">
                                             <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                             <div class="art-action-like-count">2.5k+</div>
                                             <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                                          </div>
                                          <a href="art-details.html"><img src="assets/img/bids/oc-bids-4.jpg"
                                                alt="art-img"></a>
                                       </div>
                                       <div class="art-item-content pos-rel">
                                          <div class="auction-time-and-btn">
                                             <div class="art-auction-ends in-art-item" data-countdown="2022/10/28">
                                             </div>
                                          </div>
                                          <div class="art-3dots-menu">
                                             <div class="art-3dots-action">
                                                <ul>
                                                   <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                                   </li>
                                                   <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                                   </li>
                                                </ul>
                                             </div>
                                             <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                                          </div>
                                          <div class="artist">
                                             <div class="profile-img pos-rel">
                                                <a href="creator-profile.html"><img
                                                      src="assets/img/profile/profile6.jpg" alt="profile-img"></a>
                                                <div class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </div>
                                             </div>
                                             <div class="artist-id">@jerrifo</div>
                                          </div>
                                          <h4 class="art-name"><a href="art-details.html">Startup Concept</a></h4>
                                          <div class="art-meta-info">
                                             <div class="art-meta-item">
                                                <div class="art-meta-type">Current Bid</div>
                                                <div class="art-price">51.46 ETH</div>
                                             </div>
                                             <div class="art-activity-btn">
                                                <button class="art-activity"><i
                                                      class="fal fa-waveform-path"></i>Activity</button>
                                             </div>
                                          </div>
                                          <a href="#" class="place-bid">Place Bid</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="auction-nav">
                        <div class="auction-button-prev square-nav-btn"><i class="fal fa-long-arrow-left"></i></div>
                        <div class="auction-button-next square-nav-btn"><i class="fal fa-long-arrow-right"></i></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- live-auction area end  -->

      <!-- category area start  -->
      <section class="oc-category-area pt-110 pb-70">
         <div class="container">
            <div class="row wow fadeInUp">
               <div class="col-lg-12">
                  <div class="section-title1 pos-rel text-center mb-40">
                     <h2 class="section-main-title1">Browse by Category</h2>
                     <p>Here are a few reasons why you should choose East for sell your NFT</p>
                  </div>
               </div>
            </div>
            <div class="row wow fadeInUp">
               <div class="col-xl-3 col-lg-3 col-sm-6">
                  <div class="oc-category mb-55">
                     <div class="oc-category-img">
                        <a href="explore-arts.html"><img src="assets/img/bids/oc-category-1.jpg"
                              alt="img not found"></a>
                     </div>
                     <h5 class="oc-category-title"><a href="explore-arts.html">3D Artwork</a></h5>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-sm-6">
                  <div class="oc-category mb-55">
                     <div class="oc-category-img">
                        <a href="explore-arts.html"><img src="assets/img/bids/oc-category-2.jpg"
                              alt="img not found"></a>
                     </div>
                     <h5 class="oc-category-title"><a href="explore-arts.html">Video & Music</a></h5>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-sm-6">
                  <div class="oc-category mb-55">
                     <div class="oc-category-img">
                        <a href="explore-arts.html"><img src="assets/img/bids/oc-category-3.jpg"
                              alt="img not found"></a>
                     </div>
                     <h5 class="oc-category-title"><a href="explore-arts.html">Trading Elements</a></h5>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-sm-6">
                  <div class="oc-category mb-55">
                     <div class="oc-category-img">
                        <a href="explore-arts.html"><img src="assets/img/bids/oc-category-4.jpg"
                              alt="img not found"></a>
                     </div>
                     <h5 class="oc-category-title"><a href="explore-arts.html">Photography</a></h5>
                  </div>
               </div>

               <div class="col-xl-3 col-lg-3 col-sm-6">
                  <div class="oc-category mb-55">
                     <div class="oc-category-img">
                        <a href="explore-arts.html"><img src="assets/img/bids/oc-category-5.jpg"
                              alt="img not found"></a>
                     </div>
                     <h5 class="oc-category-title"><a href="explore-arts.html">PSD Mockup</a></h5>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-sm-6">
                  <div class="oc-category mb-55">
                     <div class="oc-category-img">
                        <a href="explore-arts.html"><img src="assets/img/bids/oc-category-6.jpg"
                              alt="img not found"></a>
                     </div>
                     <h5 class="oc-category-title"><a href="explore-arts.html">Historical Book</a></h5>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-sm-6">
                  <div class="oc-category mb-55">
                     <div class="oc-category-img">
                        <a href="explore-arts.html"><img src="assets/img/bids/oc-category-7.jpg"
                              alt="img not found"></a>
                     </div>
                     <h5 class="oc-category-title"><a href="explore-arts.html">Game & Software</a></h5>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-sm-6">
                  <div class="oc-category mb-55">
                     <div class="oc-category-img">
                        <a href="explore-arts.html"><img src="assets/img/bids/oc-category-8.jpg"
                              alt="img not found"></a>
                     </div>
                     <h5 class="oc-category-title"><a href="explore-arts.html">Photo & Image</a></h5>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- category area end  -->

      <!-- top-seller area start  -->
      <section class="top-seller-area pt-110 pb-100">
         <div class="container">
            <div class="row">
               <div class="col-xl-6 col-lg-12">
                  <div class="row wow fadeInUp">
                     <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="section-title1">
                           <h2 class="section-main-title1 mb-40">Top Creator</h2>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="t-seller-filter d-flex justify-content-sm-end mb-40">
                           <form action="#">
                              <select name="tc-select" id="tc-select" class="top-seller-select">
                                 <option value="1">1 Day</option>
                                 <option value="2">7 Day</option>
                                 <option value="3">1 Month</option>
                              </select>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div class="">
                     <div class="row wow fadeInUp">
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile1.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Stive Machman</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@machman</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">820</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile2.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Jobanico Mina</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@jobanico</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">80</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile3.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Walter Russell</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@russell</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">82</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile4.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Mary Callahan</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@mary.hano</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">720</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile5.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">John Schreffler</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@john.874</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">870</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile6.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Kenny Chess</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@chess.62</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">80</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-lg-12">
                  <div class="row wow fadeInUp">
                     <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="section-title1">
                           <h2 class="section-main-title1 mb-40">Top Seller</h2>
                        </div>
                     </div>
                     <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="t-seller-filter d-flex justify-content-sm-end mb-40">
                           <form action="#">
                              <select name="ts-select" id="ts-select" class="top-seller-select">
                                 <option value="1">1 Day</option>
                                 <option value="2">7 Day</option>
                                 <option value="3">1 Month</option>
                              </select>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div class="">
                     <div class="row wow fadeInUp">
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile7.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Jeffrey Hayes</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@jerrifo</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">880</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile8.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Patricia Stephens</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@stephens</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">820</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile1.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Stive Machman</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@machman</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">820</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile2.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Jobanico Mina</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@jobanico</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">80</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile3.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Walter Russell</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@russell</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">82</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                           <div class="creator-single creator-single-short mb-30">
                              <div class="creator-wraper">
                                 <div class="creator-inner">
                                    <div class="creator-content pos-rel creator-short-content">
                                       <div class="profile-img pos-rel">
                                          <a href="creator-profile.html"><img src="assets/img/profile/profile4.jpg"
                                                alt="profile-img"></a>
                                       </div>
                                       <div class="creator-info">
                                          <div class="">
                                             <h4 class="artist-name pos-rel">
                                                <a href="creator-profile.html">Mary Callahan</a>
                                                <span class="profile-verification verified">
                                                   <i class="fas fa-check"></i>
                                                </span>
                                             </h4>
                                             <div class="artist-id">@mary.hano</div>
                                             <div class="artist-meta-item">
                                                <div class="artist-created">720</div>
                                                <div class="artist-meta-type">Created</div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>
      <!-- top-seller area end  -->

      <!-- popular-collections area start  -->
      <section class="popular-collections-area pt-0 pb-100">
         <div class="container">
            <div class="row wow fadeInUp">
               <div class="col-lg-12">
                  <div class="section-title1 pos-rel text-center mb-40">
                     <h2 class="section-main-title1">Popular Collection</h2>
                     <p>Browse most popular collections and Choose between auctions</p>
                  </div>
               </div>
            </div>
            <div class="row wow fadeInUp">
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="category-collections-wrapper mb-30">
                     <div class="category-collections-inner"> 
                        <div class="row">
                           <div class="col-6">
                              <div class="row">
                                 <div class="col-12">
                                    <div class="art-item-single">
                                       <div class="art-item-wraper">
                                          <div class="art-item-inner">
                                             <div class="art-item-img pos-rel">
                                                <a href="art-details.html"><img src="assets/img/art/art26.jpg"
                                                      alt="art-img"></a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-12">
                                    <div class="art-item-single">
                                       <div class="art-item-wraper">
                                          <div class="art-item-inner">
                                             <div class="art-item-img pos-rel">
                                                <a href="art-details.html"><img src="assets/img/art/art10.jpg"
                                                      alt="art-img"></a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-6">
                              <div class="art-item-single">
                                 <div class="art-item-wraper">
                                    <div class="art-item-inner">
                                       <div class="art-item-img pos-rel">
                                          <a href="art-details.html"><img src="assets/img/art/art20.jpg"
                                                alt="art-img"></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="collection-content pos-rel">
                           <div class="art-3dots-menu">
                              <div class="art-3dots-action">
                                 <ul>
                                    <li><a href="#"><i class="flaticon-share-1"></i>Share</a>
                                    </li>
                                 </ul>
                              </div>
                              <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                           </div>
                           <div class="collection-category">
                              <h4 class="category-name">
                                 <a href="explore-arts.html">Creative Artwork</a>
                              </h4>
                              <a href="explore-arts.html" class="resource-meta-item">
                                 <div class="resource-created">475</div>
                                 <div class="resource-meta-type">Items</div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="category-collections-wrapper mb-30">
                     <div class="category-collections-inner">
                        <div class="row">
                           <div class="col-6">
                              <div class="row">
                                 <div class="col-12">
                                    <div class="art-item-single">
                                       <div class="art-item-wraper">
                                          <div class="art-item-inner">
                                             <div class="art-item-img pos-rel">
                                                <a href="art-details.html"><img src="assets/img/art/art31.jpg"
                                                      alt="art-img"></a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-12">
                                    <div class="art-item-single">
                                       <div class="art-item-wraper">
                                          <div class="art-item-inner">
                                             <div class="art-item-img pos-rel">
                                                <a href="art-details.html"><img src="assets/img/art/art32.jpg"
                                                      alt="art-img"></a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-6">
                              <div class="art-item-single">
                                 <div class="art-item-wraper">
                                    <div class="art-item-inner">
                                       <div class="art-item-img pos-rel">
                                          <a href="art-details.html"><img src="assets/img/art/art33.jpg"
                                                alt="art-img"></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="collection-content pos-rel">
                           <div class="art-3dots-menu">
                              <div class="art-3dots-action">
                                 <ul>
                                    <li><a href="#"><i class="flaticon-share-1"></i>Share</a>
                                    </li>
                                 </ul>
                              </div>
                              <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                           </div>
                           <div class="collection-category">
                              <h4 class="category-name">
                                 <a href="explore-arts.html">Abstract Art</a>
                              </h4>
                              <a href="explore-arts.html" class="resource-meta-item">
                                 <div class="resource-created">585</div>
                                 <div class="resource-meta-type">Items</div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="category-collections-wrapper mb-30">
                     <div class="category-collections-inner">
                        <div class="row">
                           <div class="col-6">
                              <div class="row">
                                 <div class="col-12">
                                    <div class="art-item-single">
                                       <div class="art-item-wraper">
                                          <div class="art-item-inner">
                                             <div class="art-item-img pos-rel">
                                                <a href="art-details.html"><img src="assets/img/art/art36.jpg"
                                                      alt="art-img"></a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-12">
                                    <div class="art-item-single">
                                       <div class="art-item-wraper">
                                          <div class="art-item-inner">
                                             <div class="art-item-img pos-rel">
                                                <a href="art-details.html"><img src="assets/img/art/art35.jpg"
                                                      alt="art-img"></a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-6">
                              <div class="art-item-single">
                                 <div class="art-item-wraper">
                                    <div class="art-item-inner">
                                       <div class="art-item-img pos-rel">
                                          <a href="art-details.html"><img src="assets/img/art/art34.jpg"
                                                alt="art-img"></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="collection-content pos-rel">
                           <div class="art-3dots-menu">
                              <div class="art-3dots-action">
                                 <ul>
                                    <li><a href="#"><i class="flaticon-share-1"></i>Share</a>
                                    </li>
                                 </ul>
                              </div>
                              <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                           </div>
                           <div class="collection-category">
                              <h4 class="category-name">
                                 <a href="explore-arts.html">Digital Product</a>
                              </h4>
                              <a href="explore-arts.html" class="resource-meta-item">
                                 <div class="resource-created">695</div>
                                 <div class="resource-meta-type">Items</div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="category-collections-wrapper mb-30">
                     <div class="category-collections-inner">
                        <div class="row">
                           <div class="col-6">
                              <div class="row">
                                 <div class="col-12">
                                    <div class="art-item-single">
                                       <div class="art-item-wraper">
                                          <div class="art-item-inner">
                                             <div class="art-item-img pos-rel">
                                                <a href="art-details.html"><img src="assets/img/art/art37.jpg"
                                                      alt="art-img"></a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-12">
                                    <div class="art-item-single">
                                       <div class="art-item-wraper">
                                          <div class="art-item-inner">
                                             <div class="art-item-img pos-rel">
                                                <a href="art-details.html"><img src="assets/img/art/art38.jpg"
                                                      alt="art-img"></a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-6">
                              <div class="art-item-single">
                                 <div class="art-item-wraper">
                                    <div class="art-item-inner">
                                       <div class="art-item-img pos-rel">
                                          <a href="art-details.html"><img src="assets/img/art/art39.jpg"
                                                alt="art-img"></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="collection-content pos-rel">
                           <div class="art-3dots-menu">
                              <div class="art-3dots-action">
                                 <ul>
                                    <li><a href="#"><i class="flaticon-share-1"></i>Share</a>
                                    </li>
                                 </ul>
                              </div>
                              <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                           </div>
                           <div class="collection-category">
                              <h4 class="category-name">
                                 <a href="explore-arts.html">Colorful Design</a>
                              </h4>
                              <a href="explore-arts.html" class="resource-meta-item">
                                 <div class="resource-created">325</div>
                                 <div class="resource-meta-type">Items</div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- popular-collections area end  -->

      <!-- artwork area start  -->
      <section class="artworks-area artworks-area-bg pt-110 pb-100">
         <div class="container">
            <div class="row wow fadeInUp">
               <div class="col-lg-4">
                  <div class="section-title1">
                     <h2 class="section-main-title1 mb-40">Explore Artworks</h2>
                  </div>
               </div>
               <div class="col-lg-8">
                  <form action="#" class="artwork-filter-row mb-40">
                     <select name="s-t-select" id="s-t-select" class="sale-type-select">
                        <option value="1">Sale Type</option>
                        <option value="2">Fixed</option>
                        <option value="3">Auction</option>
                        <option value="3">On sale</option>
                     </select>
                     <select name="cat-select" id="cat-select" class="category-select">
                        <option value="1">Category</option>
                        <option value="2">3D Artwork</option>
                        <option value="3">Video</option>
                        <option value="3">Animation</option>
                        <option value="3">Games</option>
                        <option value="3">Software</option>
                        <option value="3">Photography</option>
                     </select>
                     <select name="st-select" id="st-select" class="status-select">
                        <option value="1">Status</option>
                        <option value="2">New</option>
                        <option value="3">Featured</option>
                     </select>
                     <select name="pr-select" id="pr-select" class="price-select">
                        <option value="1">Price</option>
                        <option value="2">High</option>
                        <option value="3">Medium</option>
                        <option value="3">Low</option>
                     </select>
                  </form>
               </div>
            </div>
            <div class="row wow fadeInUp">
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="art-item-single mb-30">
                     <div class="art-item-wraper">
                        <div class="art-item-inner">
                           <div class="art-item-img pos-rel">
                              <div class="tag-featured"><i class="fas fa-star"></i>Featured</div>
                              <div class="art-action">
                                 <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                 <div class="art-action-like-count">2.5k+</div>
                                 <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                              </div>
                              <a href="#" class="place-bid">Place Bid</a>
                              <a href="art-details.html"><img src="assets/img/art/sadhasdocasdc.jpg" alt="art-img"></a>
                           </div>
                           <div class="art-item-content pos-rel">
                              <div class="art-3dots-menu">
                                 <div class="art-3dots-action">
                                    <ul>
                                       <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                       </li>
                                       <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                              </div>
                              <div class="artist">
                                 <div class="profile-img pos-rel">
                                    <a href="creator-profile.html"><img src="assets/img/profile/profile1.jpg"
                                          alt="profile-img"></a>
                                    <div class="profile-verification verified">
                                       <i class="fas fa-check"></i>
                                    </div>
                                 </div>
                                 <div class="artist-id">@russell</div>
                              </div>
                              <h4 class="art-name"><a href="art-details.html">Motion Blender</a></h4>
                              <div class="art-meta-info">
                                 <div class="art-meta-item">
                                    <div class="art-meta-type">Current Bid</div>
                                    <div class="art-price">23.46 ETH</div>
                                 </div>
                                 <div class="art-activity-btn">
                                    <a href="activity.html" class="art-activity"><i
                                          class="fal fa-waveform-path"></i>Activity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="art-item-single mb-30">
                     <div class="art-item-wraper">
                        <div class="art-item-inner">
                           <div class="art-item-img pos-rel">
                              <div class="art-action">
                                 <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                 <div class="art-action-like-count">2.5k+</div>
                                 <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                              </div>
                              <a href="#" class="place-bid">Place Bid</a>
                              <a href="art-details.html"><img src="assets/img/art/6244170cdbc1b582421642.gif"
                                    alt="art-img"></a>
                           </div>
                           <div class="art-item-content pos-rel">
                              <div class="art-3dots-menu">
                                 <div class="art-3dots-action">
                                    <ul>
                                       <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                       </li>
                                       <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                              </div>
                              <div class="artist">
                                 <div class="profile-img pos-rel">
                                    <a href="creator-profile.html"><img src="assets/img/profile/profile4.jpg"
                                          alt="profile-img"></a>
                                    <div class="profile-verification verified">
                                       <i class="fas fa-check"></i>
                                    </div>
                                 </div>
                                 <div class="artist-id">@john.874</div>
                              </div>
                              <h4 class="art-name"><a href="art-details.html">Walking Girl</a></h4>
                              <div class="art-meta-info">
                                 <div class="art-meta-item">
                                    <div class="art-meta-type">Current Bid</div>
                                    <div class="art-price">22.46 ETH</div>
                                 </div>
                                 <div class="art-activity-btn">
                                    <a href="activity.html" class="art-activity"><i
                                          class="fal fa-waveform-path"></i>Activity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="art-item-single mb-30">
                     <div class="art-item-wraper">
                        <div class="art-item-inner">
                           <div class="art-item-img pos-rel">
                              <div class="art-action">
                                 <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                 <div class="art-action-like-count">2.5k+</div>
                                 <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                              </div>
                              <a href="#" class="place-bid">Place Bid</a>
                              <a href="art-details.html"><img src="assets/img/art/art46.jpg" alt="art-img"></a>
                           </div>
                           <div class="art-item-content pos-rel">
                              <div class="art-3dots-menu">
                                 <div class="art-3dots-action">
                                    <ul>
                                       <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                       </li>
                                       <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                              </div>
                              <div class="artist">
                                 <div class="profile-img pos-rel">
                                    <a href="creator-profile.html"><img src="assets/img/profile/profile3.jpg"
                                          alt="profile-img"></a>
                                    <div class="profile-verification verified">
                                       <i class="fas fa-check"></i>
                                    </div>
                                 </div>
                                 <div class="artist-id">@mary.hano</div>
                              </div>
                              <h4 class="art-name"><a href="art-details.html">Coloured Cartoon</a></h4>
                              <div class="art-meta-info">
                                 <div class="art-meta-item">
                                    <div class="art-meta-type">Current Bid</div>
                                    <div class="art-price">23.66 ETH</div>
                                 </div>
                                 <div class="art-activity-btn">
                                    <a href="activity.html" class="art-activity"><i
                                          class="fal fa-waveform-path"></i>Activity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="art-item-single mb-30">
                     <div class="art-item-wraper">
                        <div class="art-item-inner">
                           <div class="art-item-img pos-rel">
                              <div class="art-action">
                                 <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                 <div class="art-action-like-count">2.5k+</div>
                                 <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                              </div>
                              <a href="#" class="place-bid">Place Bid</a>
                              <a href="art-details.html"><img src="assets/img/art/vfvkodfvdv.jpg" alt="art-img"></a>
                           </div>
                           <div class="art-item-content pos-rel">
                              <div class="auction-time-and-btn">
                                 <div class="art-auction-ends in-art-item" data-countdown="2022/08/25">
                                 </div>
                              </div>
                              <div class="art-3dots-menu">
                                 <div class="art-3dots-action">
                                    <ul>
                                       <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                       </li>
                                       <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                              </div>
                              <div class="artist">
                                 <div class="profile-img pos-rel">
                                    <a href="creator-profile.html"><img src="assets/img/profile/profile2.jpg"
                                          alt="profile-img"></a>
                                    <div class="profile-verification verified">
                                       <i class="fas fa-check"></i>
                                    </div>
                                 </div>
                                 <div class="artist-id">@jobanico</div>
                              </div>
                              <h4 class="art-name"><a href="art-details.html">Coloured Bat</a></h4>
                              <div class="art-meta-info">
                                 <div class="art-meta-item">
                                    <div class="art-meta-type">Current Bid</div>
                                    <div class="art-price">83.46 ETH</div>
                                 </div>
                                 <div class="art-activity-btn">
                                    <a href="activity.html" class="art-activity"><i
                                          class="fal fa-waveform-path"></i>Activity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="art-item-single mb-30">
                     <div class="art-item-wraper">
                        <div class="art-item-inner">
                           <div class="art-item-img pos-rel">
                              <div class="art-action">
                                 <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                 <div class="art-action-like-count">2.5k+</div>
                                 <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                              </div>
                              <a href="#" class="place-bid">Place Bid</a>
                              <a href="art-details.html"><img src="assets/img/art/art5.jpg" alt="art-img"></a>
                           </div>
                           <div class="art-item-content pos-rel">
                              <div class="art-3dots-menu">
                                 <div class="art-3dots-action">
                                    <ul>
                                       <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                       </li>
                                       <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                              </div>
                              <div class="artist">
                                 <div class="profile-img pos-rel">
                                    <a href="creator-profile.html"><img src="assets/img/profile/profile5.jpg"
                                          alt="profile-img"></a>
                                    <div class="profile-verification verified">
                                       <i class="fas fa-check"></i>
                                    </div>
                                 </div>
                                 <div class="artist-id">@chess.62</div>
                              </div>
                              <h4 class="art-name"><a href="art-details.html">Rainbow Horse</a></h4>
                              <div class="art-meta-info">
                                 <div class="art-meta-item">
                                    <div class="art-meta-type">Current Bid</div>
                                    <div class="art-price">23.84 ETH</div>
                                 </div>
                                 <div class="art-activity-btn">
                                    <a href="activity.html" class="art-activity"><i
                                          class="fal fa-waveform-path"></i>Activity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="art-item-single mb-30">
                     <div class="art-item-wraper">
                        <div class="art-item-inner">
                           <div class="art-item-img pos-rel">
                              <div class="art-action">
                                 <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                 <div class="art-action-like-count">2.5k+</div>
                                 <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                              </div>
                              <a href="#" class="place-bid">Place Bid</a>
                              <a href="art-details.html"><img src="assets/img/art/fvbsdhu-fgvsfgv.jpg"
                                    alt="art-img"></a>
                           </div>
                           <div class="art-item-content pos-rel">
                              <div class="auction-time-and-btn">
                                 <div class="art-auction-ends in-art-item" data-countdown="2022/09/10">
                                 </div>
                              </div>
                              <div class="art-3dots-menu">
                                 <div class="art-3dots-action">
                                    <ul>
                                       <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                       </li>
                                       <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                              </div>
                              <div class="artist">
                                 <div class="profile-img pos-rel">
                                    <a href="creator-profile.html"><img src="assets/img/profile/profile7.jpg"
                                          alt="profile-img"></a>
                                    <div class="profile-verification verified">
                                       <i class="fas fa-check"></i>
                                    </div>
                                 </div>
                                 <div class="artist-id">@stephens</div>
                              </div>
                              <h4 class="art-name"><a href="art-details.html">Robotic Illustration</a></h4>
                              <div class="art-meta-info">
                                 <div class="art-meta-item">
                                    <div class="art-meta-type">Current Bid</div>
                                    <div class="art-price">83.46 ETH</div>
                                 </div>
                                 <div class="art-activity-btn">
                                    <a href="activity.html" class="art-activity"><i
                                          class="fal fa-waveform-path"></i>Activity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="art-item-single mb-30">
                     <div class="art-item-wraper">
                        <div class="art-item-inner">
                           <div class="art-item-img pos-rel">
                              <div class="art-action">
                                 <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                 <div class="art-action-like-count">2.5k+</div>
                                 <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                              </div>
                              <a href="#" class="place-bid">Place Bid</a>
                              <a href="art-details.html"><img src="assets/img/art/art8.jpg" alt="art-img"></a>
                           </div>
                           <div class="art-item-content pos-rel">
                              <div class="art-3dots-menu">
                                 <div class="art-3dots-action">
                                    <ul>
                                       <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                       </li>
                                       <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                              </div>
                              <div class="artist">
                                 <div class="profile-img pos-rel">
                                    <a href="creator-profile.html"><img src="assets/img/profile/profile8.jpg"
                                          alt="profile-img"></a>
                                    <div class="profile-verification verified">
                                       <i class="fas fa-check"></i>
                                    </div>
                                 </div>
                                 <div class="artist-id">@johnson</div>
                              </div>
                              <h4 class="art-name"><a href="art-details.html">Portrait Artwork</a></h4>
                              <div class="art-meta-info">
                                 <div class="art-meta-item">
                                    <div class="art-meta-type">Current Bid</div>
                                    <div class="art-price">23.35 ETH</div>
                                 </div>
                                 <div class="art-activity-btn">
                                    <a href="activity.html" class="art-activity"><i
                                          class="fal fa-waveform-path"></i>Activity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div class="art-item-single mb-30">
                     <div class="art-item-wraper">
                        <div class="art-item-inner">
                           <div class="art-item-img pos-rel">
                              <div class="art-action">
                                 <button class="art-action-like"><i class="flaticon-heart"></i></button>
                                 <div class="art-action-like-count">2.5k+</div>
                                 <div class="art-action-collection"><i class="flaticon-plus-sign"></i></div>
                              </div>
                              <a href="#" class="place-bid">Place Bid</a>
                              <a href="art-details.html"><img src="assets/img/art/624415f0c23c9169046500.gif"
                                    alt="art-img"></a>
                           </div>
                           <div class="art-item-content pos-rel">
                              <div class="art-3dots-menu">
                                 <div class="art-3dots-action">
                                    <ul>
                                       <li><a href="#"><i class="fal fa-share-alt"></i>Share</a>
                                       </li>
                                       <li><a href="#"><i class="fal fa-flag-alt"></i>Report</a>
                                       </li>
                                    </ul>
                                 </div>
                                 <button class="art-3dots-icon"><i class="fal fa-ellipsis-v"></i></button>
                              </div>
                              <div class="artist">
                                 <div class="profile-img pos-rel">
                                    <a href="creator-profile.html"><img src="assets/img/profile/profile6.jpg"
                                          alt="profile-img"></a>
                                    <div class="profile-verification verified">
                                       <i class="fas fa-check"></i>
                                    </div>
                                 </div>
                                 <div class="artist-id">@jerrifo</div>
                              </div>
                              <h4 class="art-name"><a href="art-details.html">Juice Drinking</a></h4>
                              <div class="art-meta-info">
                                 <div class="art-meta-item">
                                    <div class="art-meta-type">Current Bid</div>
                                    <div class="art-price">23.48 ETH</div>
                                 </div>
                                 <div class="art-activity-btn">
                                    <a href="activity.html" class="art-activity"><i
                                          class="fal fa-waveform-path"></i>Activity</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- artwork area end  -->

      <!-- work-process area start  -->
      <section class="work-process-area pt-110 pb-100">
         <div class="container">
            <div class="row wow fadeInUp">
               <div class="col-lg-12">
                  <div class="section-title1 pos-rel text-center mb-40">
                     <h2 class="section-main-title1">Create and sell your NFTs</h2>
                     <p>Here are a few reasons why you should choose East for sell your NFT</p>
                  </div>
               </div>
            </div>
            <div class="work-processes">
               <div class="row wow fadeInUp">
                  <div class="col-lg-4 col-md-6">
                     <div class="work-process-single mb-30 pos-rel">
                        <div class="step">Step</div>
                        <div class="work-process-content">
                           <div class="process-icon mb-40">
                              <img src="assets/img/shape/connect-icon.png" alt="img">
                           </div>
                           <h4 class="process-title">
                              <a href="wallet-connect.html">Connect your wallet</a>
                           </h4>
                           <p class="">NFTs are the latest and greatest application of blockchain technology, and
                              marketplace has become theplatform for NFT.</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     <div class="work-process-single mb-30 pos-rel">
                        <div class="step">Step</div>
                        <div class="work-process-content">
                           <div class="process-icon mb-40">
                              <img src="assets/img/shape/create-collection.png" alt="img"/>
                           </div>
                           <h4 class="process-title">
                              <a href="explore-arts.html">Create Collection</a>
                           </h4>
                           <p class="">East is the premier marketplace for which are digital items you can truly own.
                              Digital Items have existed like this.</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     <div class="work-process-single mb-30 pos-rel">
                        <div class="step">Step</div>
                        <div class="work-process-content">
                           <div class="process-icon mb-40">
                              <img src="assets/img/shape/list-icon.png" alt="img"/>
                           </div>
                           <h4 class="process-title">
                              <a href="upload.html">List them to sale</a>
                           </h4>
                           <p class="">List the collection & artworks to the blockchain network acts as the
                              decentralized ledger that tracks the ownership.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </main>


   <footer data-background="" class="footer1-bg">
      <section class="footer-area footer-area1 footer-area1-bg pt-100 pb-50">
         <div class="container">
            <div class="row">
               <div class="col-lg-3 col-md-6">
                  <div class="footer-widget footer1-widget footer1-widget1 mb-40">
                     <div class="footer-logo mb-30">
                        <a href="index.html" class="logo-bb"><img style="width: 60px; height : 60px"  src="assets/img/logo/logo.png"
                              alt="logo-img"></a>
                        <a href="index.html" class="logo-bw"><img style="width: 60px; height : 60px"  src="assets/img/logo/logo.png"
                              alt="logo-img"></a>
                     </div>
                     <p class="mb-35">A unique marketplace for both digital, and redeemable NFTs embedded company’s share and assets. </p>
                     <div class="social__links footer__social">
                        <ul>
                           <li><a href="https://t.me/eastmarketplace"><i class="fab fa-telegram"></i></a></li>
                           <li><a href="https://twitter.com/eastcoin2"><i class="fab fa-twitter"></i></a></li>
                           <li><a href="https://www.instagram.com/Eastnftmarkeplace/"><i class="fab fa-instagram"></i></a></li>
                           <li><a href="https://www.linkedin.com/company/eastcoin"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="footer-widget footer1-widget footer1-widget2 mb-40">
                     <div class="footer-widget-title">
                        <h4>Marketplace</h4>
                     </div>
                     <ul>
                        <li><a href="#">Proper Guidelines</a></li>
                        <li><a href="#">Buy Products</a></li>
                        <li><a href="#">Compare Us</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Build Ecommerce</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="footer-widget footer1-widget footer1-widget3 mb-40 ">
                     <div class="footer-widget-title">
                        <h4>Explore Artworks</h4>
                     </div>
                     <ul>
                        <li><a href="#">3D Artworks</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Flat Illustration</a></li>
                        <li><a href="#">Painting</a></li>
                        <li><a href="#">Intro Videos</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="footer-widget footer1-widget footer1-widget4 mb-40 ">
                     <div class="footer-widget-title">
                        <h4>Insight Community</h4>
                     </div>
                     <ul>
                        <li><a href="#">Global Partners</a></li>
                        <li><a href="#">Forum</a></li>
                        <li><a href="#">Virtual World</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Brand Assets</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div class="copyright-area copyright1-area">
         <div class="container">
            <div class="copyright1-inner">
               <div class="row align-items-center">
                  <div class="col-lg-3 col-md-6">
                     <div class="copyright-text copyright1-text">
                        © Powered & Created by <a href="http://eurufly.com/">Eurufly</a>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                     <div class="irc-item copyright-support copyright1-support copyright-support-lines">
                        <div class="irc-item-icon">
                           <i class="flaticon-support"></i>
                        </div>
                        <div class="irc-item-content">
                           <p>Have a question? Call us 24/7</p>
                           <a href="tel:(234)8495837283">(234) 8495837283</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-5 col-md-12">
                     <form class="subscribe-form subscribe-form-copyright1">
                        <input type="text" placeholder="Enter email">
                        <button type="submit">Subscribe<i class="fas fa-paper-plane"></i></button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>

    </div>
  )
}
