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
          {/* header area start  */}
          <header className="header1 oc-transparent-header">
            <div id="header-sticky" className="header-main header-main1">
              <div className="container header-container">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-4 col-4">
                    <div className="header-main-left">
                      <div className="header-logo header1-logo">
                        <a href="index.html" className="logo-bb">
                          <Image style={{width: '60px', height : '60px'}} src="assets/img/logo/logo.png" alt="logo-img" /></a>
                        <a href="index.html" className="logo-bw">
                          <Image style={{width: '60px', height : '60px'}} src="assets/img/logo/logo.png" alt="logo-img" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-8 col-8">
                    <div className="header-main-right">
                      <div className="main-menu main-menu1 d-none d-lg-block">
                        <nav id="mobile-menu">
                          <ul>
                            <li><a href="explore-arts.html">Explore</a></li>
                            <li><a href="creators.html">Creators</a></li>
                            <li className="menu-item-has-children"><a href="#">Links Available</a>
                              <ul className="sub-menu">
                                <li className="menu-item-has-children"><a href="creator-profile.html">Creator</a>
                                  <ul className="sub-menu">
                                    <li><a href="creator-profile.html">Creator Profile</a></li>
                                    <li><a href="creator-profile-info-personal.html">Creator Personal Info</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="art-details.html">Art</a>
                                  <ul className="sub-menu">
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
                      <form action="#" className="filter-search-input header-search d-none d-xl-inline-block">
                        <input type="text" placeholder="Search keyword" />
                        <button><i className="fal fa-search" /></button>
                      </form>
                      <div className="header-btn ml-20 d-none d-xxl-inline-block">
                        <a href="wallet-connect.html" className="fill-btn">Connect Wallet</a>
                      </div>
                      <div className="profile-item profile-item-header ml-20 d-none d-md-inline-block pos-rel">
                        <div className="profile-img pos-rel">
                          <div className="profile-action">
                            <ul>
                              <li><a href="creator-profile-info-personal.html"><i className="fal fa-user" />Profile</a>
                              </li>
                              <li><a href="login.html"><i className="fal fa-sign-out" />Logout</a></li>
                            </ul>
                          </div>
                          <Image src="assets/img/profile/profile4.jpg" alt="profile-img" />
                          <div className="profile-verification verified">
                            <i className="fas fa-check" />
                          </div>
                        </div>
                      </div>
                      <div className="menu-bar d-xl-none ml-20">
                        <a className="side-toggle" href="javascript:void(0)">
                          <div className="bar-icon">
                            <span />
                            <span />
                            <span />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* header area end */}
          {/* side toggle start */}
          <div className="fix">
            <div className="side-info">
              <div className="side-info-content">
                <div className="offset-widget offset-logo mb-40">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <a href="index.html">
                        <Image style={{width: '60px', height : '60px'}} src="assets/img/logo/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="col-3 text-end"><button className="side-info-close"><i className="fal fa-times" /></button>
                    </div>
                  </div>
                </div>
                <div className="mobile-menu d-lg-none fix" />
                <div className="offset-profile-action d-md-none">
                  <div className="offset-widget mb-40">
                    <div className="profile-item profile-item-header into-sidebar d-md-none">
                      <div className="profile-img pos-rel">
                        <div className="profile-action">
                          <ul>
                            <li><a href="creator-profile-info-personal.html"><i className="fal fa-user" />Profile</a>
                            </li>
                            <li><a href="login.html"><i className="fal fa-sign-out" />Logout</a></li>
                          </ul>
                        </div>
                        <Image src="assets/img/profile/profile4.jpg" alt="profile-img" />
                        <div className="profile-verification verified">
                          <i className="fas fa-check" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="offset-widget offset_searchbar mb-30">
                  <form action="#" className="filter-search-input">
                    <input type="text" placeholder="Search keyword" />
                    <button><i className="fal fa-search" /></button>
                  </form>
                </div>
                <div className="offset-widget mb-40">
                  <a href="upload-category.html" className="fill-btn">Upload Items</a>
                </div>
                <div className="offset-widget mb-40 d-none d-lg-block">
                  <div className="info-widget">
                    <h4 className="offset-title mb-20 d-none">Contact Info</h4>
                    <p className="mb-30">Non-fungible tokens and their smart contracts allow for detailed attributes to be
                      added, like the identity of the owner,
                      rich metadata, or secure file links.</p>
                    <a href="contact.html" className="fill-btn">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-overlay" />
          <div className="offcanvas-overlay-white" />
          {/* side toggle end */}
          {/* banner area start  */}
          <div className="banner-area banner-area1 pos-rel fix">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="single-banner single-banner-1 banner-900 d-flex align-items-center pos-rel mb-30">
                    <Image src="assets/img/banner/b1-shape1.png" alt="" className="b1-shape1" />
                    <div className="banner-bg" data-background="assets/img/banner/oc-banner-bg.png" />
                    <div className="banner-bg-light" data-background="assets/img/banner/oc-banner-bg-light.png" />
                    <div className="container pos-rel">
                      <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6">
                          <div className="banner-content banner-content1 banner-content1-1 pt-0">
                            <h1 data-animation="fadeInUp" data-delay=".3s" className="mb-25 font-prata">
                              Discover Digital
                              Artwork and Best <span>NFTs</span></h1>
                            <p data-animation="fadeInUp" data-delay=".5s" className="mb-40">A unique marketplace for both digital, and redeemable NFTs embedded company’s share and assets. </p>
                            <div className="banner-btn mb-105" data-animation="fadeInUp" data-delay=".7s">
                              <a href="explore-arts.html" className="fill-btn">Explore Now</a>
                              <div className="oc-banner-video">
                                <a href="https://youtu.be/0a82PkDE-AM" className="popup-video"><i className="fas fa-play" /></a>
                                <span>Watch Video</span>
                              </div>
                            </div>
                            <div className="oc-banner-counter">
                              <div className="art-meta-item">
                                <div className="art-meta-notice"><span className="counter">85</span>k+</div>
                                <div className="art-meta-type">Digital Artworks</div>
                              </div>
                              <div className="art-meta-item">
                                <div className="art-meta-notice"><span className="counter">25</span>k+</div>
                                <div className="art-meta-type">Global Creators</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                          <div className="oc-banner-img pos-rel">
                            <div className="oc-banner-img-1 stuff">
                              <Image className data-depth=".5" src="assets/img/banner/oc-banner-1.jpg" alt="img not found" />
                            </div>
                            <div className="oc-banner-img-2 stuff2">
                              <Image className data-depth=".6" src="assets/img/banner/oc-banner-2.jpg" alt="img not found" />
                            </div>
                            <div className="oc-banner-img-3 stuff3">
                              <Image className data-depth=".3" src="assets/img/banner/oc-banner-3.jpg" alt="img not found" />
                            </div>
                            <div className="oc-banner-img-4 stuff4">
                              <Image className data-depth=".5" src="assets/img/banner/oc-banner-4.jpg" alt="img not found" />
                            </div>
                            <div className="oc-banner-client-wrapper stuff5">
                              <div className="oc-banner-client " data-depth=".3">
                                <div className="q-meta-item">
                                  <div className="q-meta-viewed-members">
                                    <a href="creator-profile.html"><Image src="assets/img/profile/profile1.jpg" alt="profile-img" /></a>
                                    <a href="creator-profile.html"><Image src="assets/img/profile/profile2.jpg" alt="profile-img" /></a>
                                    <a href="creator-profile.html"><Image src="assets/img/profile/profile3.jpg" alt="profile-img" /></a>
                                    <a href="creator-profile.html"><Image src="assets/img/profile/profile4.jpg" alt="profile-img" /></a>
                                    <a href="creator-profile.html"><Image src="assets/img/profile/profile5.jpg" alt="profile-img" /></a>
                                  </div>
                                  <div className="q-meta-viewed-members-count">
                                    <span className="q-meta-views">More Than</span>
                                    <span className="q-meta-type">25k+</span>
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
              {/* If we need navigation buttons */}
              <div className="slider-nav d-none">
                <div className="slider-button-prev"><i className="fal fa-long-arrow-left" /></div>
                <div className="slider-button-next"><i className="fal fa-long-arrow-right" /></div>
              </div>
            </div>
          </div>
          {/* banner area end  */}
          {/* walet area start  */}
          <section className="oc-wallet-area pt-110">
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-12">
                  <div className="section-title1 pos-rel text-center mb-40">
                    <h2 className="section-main-title1">Set Your Wallet</h2>
                    <p>Here are a few reasons why you should choose East</p>
                  </div>
                </div>
              </div>
              <div className="row wow fadeInUp justify-content-center">
                <div className="col-xl-10">
                  <div className="row">
                    <div className="col-xl-2 wallet-col-width-20">
                      <a href="wallet-connect.html">
                        <div className="oc-wallet text-center mb-30">
                          <div className="oc-wallet-icon text-center">
                            <Image src="assets/img/wallet/oc-wallet-1.png" alt="img not found" />
                          </div>
                          <h5 className="oc-wallet-title">Meta Mask</h5>
                        </div>
                      </a>
                    </div>
                    <div className="col-xl-2 wallet-col-width-20">
                      <a href="wallet-connect.html">
                        <div className="oc-wallet text-center mb-30">
                          <div className="oc-wallet-icon text-center">
                            <Image src="assets/img/wallet/oc-wallet-2.png" alt="img not found" />
                          </div>
                          <h5 className="oc-wallet-title">Binance</h5>
                        </div>
                      </a>
                    </div>
                    <div className="col-xl-2 wallet-col-width-20">
                      <a href="wallet-connect.html">
                        <div className="oc-wallet text-center mb-30">
                          <div className="oc-wallet-icon text-center">
                            <Image src="assets/img/wallet/oc-wallet-3.png" alt="img not found" />
                          </div>
                          <h5 className="oc-wallet-title">Formatic</h5>
                        </div>
                      </a>
                    </div>
                    <div className="col-xl-2 wallet-col-width-20">
                      <a href="wallet-connect.html">
                        <div className="oc-wallet text-center mb-30">
                          <div className="oc-wallet-icon text-center">
                            <Image src="assets/img/wallet/oc-wallet-4.png" alt="img not found" />
                          </div>
                          <h5 className="oc-wallet-title">Autherum</h5>
                        </div>
                      </a>
                    </div>
                    <div className="col-xl-2 wallet-col-width-20">
                      <a href="wallet-connect.html">
                        <div className="oc-wallet text-center mb-30">
                          <div className="oc-wallet-icon text-center">
                            <Image src="assets/img/wallet/oc-wallet-5.png" alt="img not found" />
                          </div>
                          <h5 className="oc-wallet-title">Coinbase</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* walet area end  */}
          {/* live-auction area start  */}
          <section className="live-auction-area pt-80 pb-100">
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-lg-8">
                  <div className="section-title1 pos-rel">
                    <div className="live-blink" />
                    <h2 className="section-main-title1 mb-40 pl-35">Live Bids</h2>
                  </div>
                </div>
              </div>
              <div className="row wow fadeInUp">
                <div className="col-lg-12">
                  <div className="auction-wrapper pos-rel">
                    <div className="swiper-container auction-active">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="art-item-single mb-30">
                            <div className="art-item-wraper">
                              <div className="art-item-inner">
                                <div className="art-item-img pos-rel">
                                  <div className="tag-featured"><i className="fas fa-star" />Featured</div>
                                  <div className="art-action">
                                    <button className="art-action-like"><i className="flaticon-heart" /></button>
                                    <div className="art-action-like-count">2.5k+</div>
                                    <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                                  </div>
                                  <a href="art-details.html"><Image src="assets/img/bids/oc-bids-1.jpg" alt="art-img" /></a>
                                </div>
                                <div className="art-item-content pos-rel">
                                  <div className="auction-time-and-btn">
                                    <div className="art-auction-ends in-art-item" data-countdown="2022/10/25">
                                    </div>
                                  </div>
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                        </li>
                                        <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                                  </div>
                                  <div className="artist">
                                    <div className="profile-img pos-rel">
                                      <a href="creator-profile.html"><Image src="assets/img/profile/profile2.jpg" alt="profile-img" /></a>
                                      <div className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </div>
                                    </div>
                                    <div className="artist-id">@jobanico</div>
                                  </div>
                                  <h4 className="art-name"><a href="art-details.html">Bearded Man</a></h4>
                                  <div className="art-meta-info">
                                    <div className="art-meta-item">
                                      <div className="art-meta-type">Current Bid</div>
                                      <div className="art-price">83.46 ETH</div>
                                    </div>
                                    <div className="art-activity-btn">
                                      <button className="art-activity"><i className="fal fa-waveform-path" />Activity</button>
                                    </div>
                                  </div>
                                  <a href="#" className="place-bid">Place Bid</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="art-item-single mb-30">
                            <div className="art-item-wraper">
                              <div className="art-item-inner">
                                <div className="art-item-img pos-rel">
                                  <div className="art-action">
                                    <button className="art-action-like"><i className="flaticon-heart" /></button>
                                    <div className="art-action-like-count">2.5k+</div>
                                    <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                                  </div>
                                  <a href="art-details.html"><Image src="assets/img/bids/oc-bids-2.jpg" alt="art-img" /></a>
                                </div>
                                <div className="art-item-content pos-rel">
                                  <div className="auction-time-and-btn">
                                    <div className="art-auction-ends in-art-item" data-countdown="2022/09/10">
                                    </div>
                                  </div>
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                        </li>
                                        <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                                  </div>
                                  <div className="artist">
                                    <div className="profile-img pos-rel">
                                      <a href="creator-profile.html"><Image src="assets/img/profile/profile7.jpg" alt="profile-img" /></a>
                                      <div className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </div>
                                    </div>
                                    <div className="artist-id">@stephens</div>
                                  </div>
                                  <h4 className="art-name"><a href="art-details.html">Ornament Illustration</a></h4>
                                  <div className="art-meta-info">
                                    <div className="art-meta-item">
                                      <div className="art-meta-type">Current Bid</div>
                                      <div className="art-price">83.46 ETH</div>
                                    </div>
                                    <div className="art-activity-btn">
                                      <button className="art-activity"><i className="fal fa-waveform-path" />Activity</button>
                                    </div>
                                  </div>
                                  <a href="#" className="place-bid">Place Bid</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="art-item-single mb-30">
                            <div className="art-item-wraper">
                              <div className="art-item-inner">
                                <div className="art-item-img pos-rel">
                                  <div className="tag-featured"><i className="fas fa-star" />Featured</div>
                                  <div className="art-action">
                                    <button className="art-action-like"><i className="flaticon-heart" /></button>
                                    <div className="art-action-like-count">2.5k+</div>
                                    <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                                  </div>
                                  <a href="art-details.html"><Image src="assets/img/bids/oc-bids-3.jpg" alt="art-img" /></a>
                                </div>
                                <div className="art-item-content pos-rel">
                                  <div className="auction-time-and-btn">
                                    <div className="art-auction-ends in-art-item" data-countdown="2022/11/15">
                                    </div>
                                  </div>
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                        </li>
                                        <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                                  </div>
                                  <div className="artist">
                                    <div className="profile-img pos-rel">
                                      <a href="creator-profile.html"><Image src="assets/img/profile/profile8.jpg" alt="profile-img" /></a>
                                      <div className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </div>
                                    </div>
                                    <div className="artist-id">@johnson</div>
                                  </div>
                                  <h4 className="art-name"><a href="art-details.html">Easter Santa Clause</a></h4>
                                  <div className="art-meta-info">
                                    <div className="art-meta-item">
                                      <div className="art-meta-type">Current Bid</div>
                                      <div className="art-price">46.46 ETH</div>
                                    </div>
                                    <div className="art-activity-btn">
                                      <button className="art-activity"><i className="fal fa-waveform-path" />Activity</button>
                                    </div>
                                  </div>
                                  <a href="#" className="place-bid">Place Bid</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="art-item-single mb-30">
                            <div className="art-item-wraper">
                              <div className="art-item-inner">
                                <div className="art-item-img pos-rel">
                                  <div className="art-action">
                                    <button className="art-action-like"><i className="flaticon-heart" /></button>
                                    <div className="art-action-like-count">2.5k+</div>
                                    <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                                  </div>
                                  <a href="art-details.html"><Image src="assets/img/bids/oc-bids-4.jpg" alt="art-img" /></a>
                                </div>
                                <div className="art-item-content pos-rel">
                                  <div className="auction-time-and-btn">
                                    <div className="art-auction-ends in-art-item" data-countdown="2022/10/28">
                                    </div>
                                  </div>
                                  <div className="art-3dots-menu">
                                    <div className="art-3dots-action">
                                      <ul>
                                        <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                        </li>
                                        <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                                  </div>
                                  <div className="artist">
                                    <div className="profile-img pos-rel">
                                      <a href="creator-profile.html"><Image src="assets/img/profile/profile6.jpg" alt="profile-img" /></a>
                                      <div className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </div>
                                    </div>
                                    <div className="artist-id">@jerrifo</div>
                                  </div>
                                  <h4 className="art-name"><a href="art-details.html">Startup Concept</a></h4>
                                  <div className="art-meta-info">
                                    <div className="art-meta-item">
                                      <div className="art-meta-type">Current Bid</div>
                                      <div className="art-price">51.46 ETH</div>
                                    </div>
                                    <div className="art-activity-btn">
                                      <button className="art-activity"><i className="fal fa-waveform-path" />Activity</button>
                                    </div>
                                  </div>
                                  <a href="#" className="place-bid">Place Bid</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="auction-nav">
                      <div className="auction-button-prev square-nav-btn"><i className="fal fa-long-arrow-left" /></div>
                      <div className="auction-button-next square-nav-btn"><i className="fal fa-long-arrow-right" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* live-auction area end  */}
          {/* category area start  */}
          <section className="oc-category-area pt-110 pb-70">
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-lg-12">
                  <div className="section-title1 pos-rel text-center mb-40">
                    <h2 className="section-main-title1">Browse by Category</h2>
                    <p>Here are a few reasons why you should choose East for sell your NFT</p>
                  </div>
                </div>
              </div>
              <div className="row wow fadeInUp">
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                    <div className="oc-category-img">
                      <a href="explore-arts.html"><Image src="assets/img/bids/oc-category-1.jpg" alt="img not found" /></a>
                    </div>
                    <h5 className="oc-category-title"><a href="explore-arts.html">3D Artwork</a></h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                    <div className="oc-category-img">
                      <a href="explore-arts.html"><Image src="assets/img/bids/oc-category-2.jpg" alt="img not found" /></a>
                    </div>
                    <h5 className="oc-category-title"><a href="explore-arts.html">Video &amp; Music</a></h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                    <div className="oc-category-img">
                      <a href="explore-arts.html"><Image src="assets/img/bids/oc-category-3.jpg" alt="img not found" /></a>
                    </div>
                    <h5 className="oc-category-title"><a href="explore-arts.html">Trading Elements</a></h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                    <div className="oc-category-img">
                      <a href="explore-arts.html"><Image src="assets/img/bids/oc-category-4.jpg" alt="img not found" /></a>
                    </div>
                    <h5 className="oc-category-title"><a href="explore-arts.html">Photography</a></h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                    <div className="oc-category-img">
                      <a href="explore-arts.html"><Image src="assets/img/bids/oc-category-5.jpg" alt="img not found" /></a>
                    </div>
                    <h5 className="oc-category-title"><a href="explore-arts.html">PSD Mockup</a></h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                    <div className="oc-category-img">
                      <a href="explore-arts.html"><Image src="assets/img/bids/oc-category-6.jpg" alt="img not found" /></a>
                    </div>
                    <h5 className="oc-category-title"><a href="explore-arts.html">Historical Book</a></h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                    <div className="oc-category-img">
                      <a href="explore-arts.html"><Image src="assets/img/bids/oc-category-7.jpg" alt="img not found" /></a>
                    </div>
                    <h5 className="oc-category-title"><a href="explore-arts.html">Game &amp; Software</a></h5>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="oc-category mb-55">
                    <div className="oc-category-img">
                      <a href="explore-arts.html"><Image src="assets/img/bids/oc-category-8.jpg" alt="img not found" /></a>
                    </div>
                    <h5 className="oc-category-title"><a href="explore-arts.html">Photo &amp; Image</a></h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* category area end  */}
          {/* top-seller area start  */}
          <section className="top-seller-area pt-110 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <div className="row wow fadeInUp">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title1">
                        <h2 className="section-main-title1 mb-40">Top Creator</h2>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="t-seller-filter d-flex justify-content-sm-end mb-40">
                        <form action="#">
                          <select name="tc-select" id="tc-select" className="top-seller-select">
                            <option value={1}>1 Day</option>
                            <option value={2}>7 Day</option>
                            <option value={3}>1 Month</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <div className="row wow fadeInUp">
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile1.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Stive Machman</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@machman</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">820</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile2.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Jobanico Mina</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@jobanico</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">80</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile3.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Walter Russell</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@russell</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">82</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile4.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Mary Callahan</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@mary.hano</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">720</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile5.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">John Schreffler</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@john.874</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">870</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile6.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Kenny Chess</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@chess.62</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">80</div>
                                      <div className="artist-meta-type">Created</div>
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
                <div className="col-xl-6 col-lg-12">
                  <div className="row wow fadeInUp">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="section-title1">
                        <h2 className="section-main-title1 mb-40">Top Seller</h2>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="t-seller-filter d-flex justify-content-sm-end mb-40">
                        <form action="#">
                          <select name="ts-select" id="ts-select" className="top-seller-select">
                            <option value={1}>1 Day</option>
                            <option value={2}>7 Day</option>
                            <option value={3}>1 Month</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <div className="row wow fadeInUp">
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile7.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Jeffrey Hayes</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@jerrifo</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">880</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile8.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Patricia Stephens</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@stephens</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">820</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile1.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Stive Machman</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@machman</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">820</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile2.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Jobanico Mina</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@jobanico</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">80</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile3.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Walter Russell</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@russell</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">82</div>
                                      <div className="artist-meta-type">Created</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                        <div className="creator-single creator-single-short mb-30">
                          <div className="creator-wraper">
                            <div className="creator-inner">
                              <div className="creator-content pos-rel creator-short-content">
                                <div className="profile-img pos-rel">
                                  <a href="creator-profile.html"><Image src="assets/img/profile/profile4.jpg" alt="profile-img" /></a>
                                </div>
                                <div className="creator-info">
                                  <div className>
                                    <h4 className="artist-name pos-rel">
                                      <a href="creator-profile.html">Mary Callahan</a>
                                      <span className="profile-verification verified">
                                        <i className="fas fa-check" />
                                      </span>
                                    </h4>
                                    <div className="artist-id">@mary.hano</div>
                                    <div className="artist-meta-item">
                                      <div className="artist-created">720</div>
                                      <div className="artist-meta-type">Created</div>
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
          {/* top-seller area end  */}
          {/* popular-collections area start  */}
          <section className="popular-collections-area pt-0 pb-100">
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-lg-12">
                  <div className="section-title1 pos-rel text-center mb-40">
                    <h2 className="section-main-title1">Popular Collection</h2>
                    <p>Browse most popular collections and Choose between auctions</p>
                  </div>
                </div>
              </div>
              <div className="row wow fadeInUp">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="category-collections-wrapper mb-30">
                    <div className="category-collections-inner"> 
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-12">
                              <div className="art-item-single">
                                <div className="art-item-wraper">
                                  <div className="art-item-inner">
                                    <div className="art-item-img pos-rel">
                                      <a href="art-details.html"><Image src="assets/img/art/art26.jpg" alt="art-img" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="art-item-single">
                                <div className="art-item-wraper">
                                  <div className="art-item-inner">
                                    <div className="art-item-img pos-rel">
                                      <a href="art-details.html"><Image src="assets/img/art/art10.jpg" alt="art-img" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="art-item-single">
                            <div className="art-item-wraper">
                              <div className="art-item-inner">
                                <div className="art-item-img pos-rel">
                                  <a href="art-details.html"><Image src="assets/img/art/art20.jpg" alt="art-img" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="collection-content pos-rel">
                        <div className="art-3dots-menu">
                          <div className="art-3dots-action">
                            <ul>
                              <li><a href="#"><i className="flaticon-share-1" />Share</a>
                              </li>
                            </ul>
                          </div>
                          <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                        </div>
                        <div className="collection-category">
                          <h4 className="category-name">
                            <a href="explore-arts.html">Creative Artwork</a>
                          </h4>
                          <a href="explore-arts.html" className="resource-meta-item">
                            <div className="resource-created">475</div>
                            <div className="resource-meta-type">Items</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="category-collections-wrapper mb-30">
                    <div className="category-collections-inner">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-12">
                              <div className="art-item-single">
                                <div className="art-item-wraper">
                                  <div className="art-item-inner">
                                    <div className="art-item-img pos-rel">
                                      <a href="art-details.html"><Image src="assets/img/art/art31.jpg" alt="art-img" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="art-item-single">
                                <div className="art-item-wraper">
                                  <div className="art-item-inner">
                                    <div className="art-item-img pos-rel">
                                      <a href="art-details.html"><Image src="assets/img/art/art32.jpg" alt="art-img" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="art-item-single">
                            <div className="art-item-wraper">
                              <div className="art-item-inner">
                                <div className="art-item-img pos-rel">
                                  <a href="art-details.html"><Image src="assets/img/art/art33.jpg" alt="art-img" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="collection-content pos-rel">
                        <div className="art-3dots-menu">
                          <div className="art-3dots-action">
                            <ul>
                              <li><a href="#"><i className="flaticon-share-1" />Share</a>
                              </li>
                            </ul>
                          </div>
                          <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                        </div>
                        <div className="collection-category">
                          <h4 className="category-name">
                            <a href="explore-arts.html">Abstract Art</a>
                          </h4>
                          <a href="explore-arts.html" className="resource-meta-item">
                            <div className="resource-created">585</div>
                            <div className="resource-meta-type">Items</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="category-collections-wrapper mb-30">
                    <div className="category-collections-inner">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-12">
                              <div className="art-item-single">
                                <div className="art-item-wraper">
                                  <div className="art-item-inner">
                                    <div className="art-item-img pos-rel">
                                      <a href="art-details.html"><Image src="assets/img/art/art36.jpg" alt="art-img" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="art-item-single">
                                <div className="art-item-wraper">
                                  <div className="art-item-inner">
                                    <div className="art-item-img pos-rel">
                                      <a href="art-details.html"><Image src="assets/img/art/art35.jpg" alt="art-img" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="art-item-single">
                            <div className="art-item-wraper">
                              <div className="art-item-inner">
                                <div className="art-item-img pos-rel">
                                  <a href="art-details.html"><Image src="assets/img/art/art34.jpg" alt="art-img" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="collection-content pos-rel">
                        <div className="art-3dots-menu">
                          <div className="art-3dots-action">
                            <ul>
                              <li><a href="#"><i className="flaticon-share-1" />Share</a>
                              </li>
                            </ul>
                          </div>
                          <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                        </div>
                        <div className="collection-category">
                          <h4 className="category-name">
                            <a href="explore-arts.html">Digital Product</a>
                          </h4>
                          <a href="explore-arts.html" className="resource-meta-item">
                            <div className="resource-created">695</div>
                            <div className="resource-meta-type">Items</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="category-collections-wrapper mb-30">
                    <div className="category-collections-inner">
                      <div className="row">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-12">
                              <div className="art-item-single">
                                <div className="art-item-wraper">
                                  <div className="art-item-inner">
                                    <div className="art-item-img pos-rel">
                                      <a href="art-details.html"><Image src="assets/img/art/art37.jpg" alt="art-img" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="art-item-single">
                                <div className="art-item-wraper">
                                  <div className="art-item-inner">
                                    <div className="art-item-img pos-rel">
                                      <a href="art-details.html"><Image src="assets/img/art/art38.jpg" alt="art-img" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="art-item-single">
                            <div className="art-item-wraper">
                              <div className="art-item-inner">
                                <div className="art-item-img pos-rel">
                                  <a href="art-details.html"><Image src="assets/img/art/art39.jpg" alt="art-img" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="collection-content pos-rel">
                        <div className="art-3dots-menu">
                          <div className="art-3dots-action">
                            <ul>
                              <li><a href="#"><i className="flaticon-share-1" />Share</a>
                              </li>
                            </ul>
                          </div>
                          <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                        </div>
                        <div className="collection-category">
                          <h4 className="category-name">
                            <a href="explore-arts.html">Colorful Design</a>
                          </h4>
                          <a href="explore-arts.html" className="resource-meta-item">
                            <div className="resource-created">325</div>
                            <div className="resource-meta-type">Items</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* popular-collections area end  */}
          {/* artwork area start  */}
          <section className="artworks-area artworks-area-bg pt-110 pb-100">
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-lg-4">
                  <div className="section-title1">
                    <h2 className="section-main-title1 mb-40">Explore Artworks</h2>
                  </div>
                </div>
                <div className="col-lg-8">
                  <form action="#" className="artwork-filter-row mb-40">
                    <select name="s-t-select" id="s-t-select" className="sale-type-select">
                      <option value={1}>Sale Type</option>
                      <option value={2}>Fixed</option>
                      <option value={3}>Auction</option>
                      <option value={3}>On sale</option>
                    </select>
                    <select name="cat-select" id="cat-select" className="category-select">
                      <option value={1}>Category</option>
                      <option value={2}>3D Artwork</option>
                      <option value={3}>Video</option>
                      <option value={3}>Animation</option>
                      <option value={3}>Games</option>
                      <option value={3}>Software</option>
                      <option value={3}>Photography</option>
                    </select>
                    <select name="st-select" id="st-select" className="status-select">
                      <option value={1}>Status</option>
                      <option value={2}>New</option>
                      <option value={3}>Featured</option>
                    </select>
                    <select name="pr-select" id="pr-select" className="price-select">
                      <option value={1}>Price</option>
                      <option value={2}>High</option>
                      <option value={3}>Medium</option>
                      <option value={3}>Low</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="row wow fadeInUp">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="art-item-single mb-30">
                    <div className="art-item-wraper">
                      <div className="art-item-inner">
                        <div className="art-item-img pos-rel">
                          <div className="tag-featured"><i className="fas fa-star" />Featured</div>
                          <div className="art-action">
                            <button className="art-action-like"><i className="flaticon-heart" /></button>
                            <div className="art-action-like-count">2.5k+</div>
                            <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                          </div>
                          <a href="#" className="place-bid">Place Bid</a>
                          <a href="art-details.html"><Image src="assets/img/art/sadhasdocasdc.jpg" alt="art-img" /></a>
                        </div>
                        <div className="art-item-content pos-rel">
                          <div className="art-3dots-menu">
                            <div className="art-3dots-action">
                              <ul>
                                <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                </li>
                                <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                </li>
                              </ul>
                            </div>
                            <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                          </div>
                          <div className="artist">
                            <div className="profile-img pos-rel">
                              <a href="creator-profile.html"><Image src="assets/img/profile/profile1.jpg" alt="profile-img" /></a>
                              <div className="profile-verification verified">
                                <i className="fas fa-check" />
                              </div>
                            </div>
                            <div className="artist-id">@russell</div>
                          </div>
                          <h4 className="art-name"><a href="art-details.html">Motion Blender</a></h4>
                          <div className="art-meta-info">
                            <div className="art-meta-item">
                              <div className="art-meta-type">Current Bid</div>
                              <div className="art-price">23.46 ETH</div>
                            </div>
                            <div className="art-activity-btn">
                              <a href="activity.html" className="art-activity"><i className="fal fa-waveform-path" />Activity</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="art-item-single mb-30">
                    <div className="art-item-wraper">
                      <div className="art-item-inner">
                        <div className="art-item-img pos-rel">
                          <div className="art-action">
                            <button className="art-action-like"><i className="flaticon-heart" /></button>
                            <div className="art-action-like-count">2.5k+</div>
                            <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                          </div>
                          <a href="#" className="place-bid">Place Bid</a>
                          <a href="art-details.html"><Image src="assets/img/art/6244170cdbc1b582421642.gif" alt="art-img" /></a>
                        </div>
                        <div className="art-item-content pos-rel">
                          <div className="art-3dots-menu">
                            <div className="art-3dots-action">
                              <ul>
                                <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                </li>
                                <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                </li>
                              </ul>
                            </div>
                            <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                          </div>
                          <div className="artist">
                            <div className="profile-img pos-rel">
                              <a href="creator-profile.html"><Image src="assets/img/profile/profile4.jpg" alt="profile-img" /></a>
                              <div className="profile-verification verified">
                                <i className="fas fa-check" />
                              </div>
                            </div>
                            <div className="artist-id">@john.874</div>
                          </div>
                          <h4 className="art-name"><a href="art-details.html">Walking Girl</a></h4>
                          <div className="art-meta-info">
                            <div className="art-meta-item">
                              <div className="art-meta-type">Current Bid</div>
                              <div className="art-price">22.46 ETH</div>
                            </div>
                            <div className="art-activity-btn">
                              <a href="activity.html" className="art-activity"><i className="fal fa-waveform-path" />Activity</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="art-item-single mb-30">
                    <div className="art-item-wraper">
                      <div className="art-item-inner">
                        <div className="art-item-img pos-rel">
                          <div className="art-action">
                            <button className="art-action-like"><i className="flaticon-heart" /></button>
                            <div className="art-action-like-count">2.5k+</div>
                            <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                          </div>
                          <a href="#" className="place-bid">Place Bid</a>
                          <a href="art-details.html"><Image src="assets/img/art/art46.jpg" alt="art-img" /></a>
                        </div>
                        <div className="art-item-content pos-rel">
                          <div className="art-3dots-menu">
                            <div className="art-3dots-action">
                              <ul>
                                <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                </li>
                                <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                </li>
                              </ul>
                            </div>
                            <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                          </div>
                          <div className="artist">
                            <div className="profile-img pos-rel">
                              <a href="creator-profile.html"><Image src="assets/img/profile/profile3.jpg" alt="profile-img" /></a>
                              <div className="profile-verification verified">
                                <i className="fas fa-check" />
                              </div>
                            </div>
                            <div className="artist-id">@mary.hano</div>
                          </div>
                          <h4 className="art-name"><a href="art-details.html">Coloured Cartoon</a></h4>
                          <div className="art-meta-info">
                            <div className="art-meta-item">
                              <div className="art-meta-type">Current Bid</div>
                              <div className="art-price">23.66 ETH</div>
                            </div>
                            <div className="art-activity-btn">
                              <a href="activity.html" className="art-activity"><i className="fal fa-waveform-path" />Activity</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="art-item-single mb-30">
                    <div className="art-item-wraper">
                      <div className="art-item-inner">
                        <div className="art-item-img pos-rel">
                          <div className="art-action">
                            <button className="art-action-like"><i className="flaticon-heart" /></button>
                            <div className="art-action-like-count">2.5k+</div>
                            <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                          </div>
                          <a href="#" className="place-bid">Place Bid</a>
                          <a href="art-details.html"><Image src="assets/img/art/vfvkodfvdv.jpg" alt="art-img" /></a>
                        </div>
                        <div className="art-item-content pos-rel">
                          <div className="auction-time-and-btn">
                            <div className="art-auction-ends in-art-item" data-countdown="2022/08/25">
                            </div>
                          </div>
                          <div className="art-3dots-menu">
                            <div className="art-3dots-action">
                              <ul>
                                <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                </li>
                                <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                </li>
                              </ul>
                            </div>
                            <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                          </div>
                          <div className="artist">
                            <div className="profile-img pos-rel">
                              <a href="creator-profile.html"><Image src="assets/img/profile/profile2.jpg" alt="profile-img" /></a>
                              <div className="profile-verification verified">
                                <i className="fas fa-check" />
                              </div>
                            </div>
                            <div className="artist-id">@jobanico</div>
                          </div>
                          <h4 className="art-name"><a href="art-details.html">Coloured Bat</a></h4>
                          <div className="art-meta-info">
                            <div className="art-meta-item">
                              <div className="art-meta-type">Current Bid</div>
                              <div className="art-price">83.46 ETH</div>
                            </div>
                            <div className="art-activity-btn">
                              <a href="activity.html" className="art-activity"><i className="fal fa-waveform-path" />Activity</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="art-item-single mb-30">
                    <div className="art-item-wraper">
                      <div className="art-item-inner">
                        <div className="art-item-img pos-rel">
                          <div className="art-action">
                            <button className="art-action-like"><i className="flaticon-heart" /></button>
                            <div className="art-action-like-count">2.5k+</div>
                            <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                          </div>
                          <a href="#" className="place-bid">Place Bid</a>
                          <a href="art-details.html"><Image src="assets/img/art/art5.jpg" alt="art-img" /></a>
                        </div>
                        <div className="art-item-content pos-rel">
                          <div className="art-3dots-menu">
                            <div className="art-3dots-action">
                              <ul>
                                <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                </li>
                                <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                </li>
                              </ul>
                            </div>
                            <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                          </div>
                          <div className="artist">
                            <div className="profile-img pos-rel">
                              <a href="creator-profile.html"><Image src="assets/img/profile/profile5.jpg" alt="profile-img" /></a>
                              <div className="profile-verification verified">
                                <i className="fas fa-check" />
                              </div>
                            </div>
                            <div className="artist-id">@chess.62</div>
                          </div>
                          <h4 className="art-name"><a href="art-details.html">Rainbow Horse</a></h4>
                          <div className="art-meta-info">
                            <div className="art-meta-item">
                              <div className="art-meta-type">Current Bid</div>
                              <div className="art-price">23.84 ETH</div>
                            </div>
                            <div className="art-activity-btn">
                              <a href="activity.html" className="art-activity"><i className="fal fa-waveform-path" />Activity</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="art-item-single mb-30">
                    <div className="art-item-wraper">
                      <div className="art-item-inner">
                        <div className="art-item-img pos-rel">
                          <div className="art-action">
                            <button className="art-action-like"><i className="flaticon-heart" /></button>
                            <div className="art-action-like-count">2.5k+</div>
                            <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                          </div>
                          <a href="#" className="place-bid">Place Bid</a>
                          <a href="art-details.html"><Image src="assets/img/art/fvbsdhu-fgvsfgv.jpg" alt="art-img" /></a>
                        </div>
                        <div className="art-item-content pos-rel">
                          <div className="auction-time-and-btn">
                            <div className="art-auction-ends in-art-item" data-countdown="2022/09/10">
                            </div>
                          </div>
                          <div className="art-3dots-menu">
                            <div className="art-3dots-action">
                              <ul>
                                <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                </li>
                                <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                </li>
                              </ul>
                            </div>
                            <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                          </div>
                          <div className="artist">
                            <div className="profile-img pos-rel">
                              <a href="creator-profile.html"><img src="assets/img/profile/profile7.jpg" alt="profile-img" /></a>
                              <div className="profile-verification verified">
                                <i className="fas fa-check" />
                              </div>
                            </div>
                            <div className="artist-id">@stephens</div>
                          </div>
                          <h4 className="art-name"><a href="art-details.html">Robotic Illustration</a></h4>
                          <div className="art-meta-info">
                            <div className="art-meta-item">
                              <div className="art-meta-type">Current Bid</div>
                              <div className="art-price">83.46 ETH</div>
                            </div>
                            <div className="art-activity-btn">
                              <a href="activity.html" className="art-activity"><i className="fal fa-waveform-path" />Activity</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="art-item-single mb-30">
                    <div className="art-item-wraper">
                      <div className="art-item-inner">
                        <div className="art-item-img pos-rel">
                          <div className="art-action">
                            <button className="art-action-like"><i className="flaticon-heart" /></button>
                            <div className="art-action-like-count">2.5k+</div>
                            <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                          </div>
                          <a href="#" className="place-bid">Place Bid</a>
                          <a href="art-details.html"><img src="assets/img/art/art8.jpg" alt="art-img" /></a>
                        </div>
                        <div className="art-item-content pos-rel">
                          <div className="art-3dots-menu">
                            <div className="art-3dots-action">
                              <ul>
                                <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                </li>
                                <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                </li>
                              </ul>
                            </div>
                            <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                          </div>
                          <div className="artist">
                            <div className="profile-img pos-rel">
                              <a href="creator-profile.html"><img src="assets/img/profile/profile8.jpg" alt="profile-img" /></a>
                              <div className="profile-verification verified">
                                <i className="fas fa-check" />
                              </div>
                            </div>
                            <div className="artist-id">@johnson</div>
                          </div>
                          <h4 className="art-name"><a href="art-details.html">Portrait Artwork</a></h4>
                          <div className="art-meta-info">
                            <div className="art-meta-item">
                              <div className="art-meta-type">Current Bid</div>
                              <div className="art-price">23.35 ETH</div>
                            </div>
                            <div className="art-activity-btn">
                              <a href="activity.html" className="art-activity"><i className="fal fa-waveform-path" />Activity</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="art-item-single mb-30">
                    <div className="art-item-wraper">
                      <div className="art-item-inner">
                        <div className="art-item-img pos-rel">
                          <div className="art-action">
                            <button className="art-action-like"><i className="flaticon-heart" /></button>
                            <div className="art-action-like-count">2.5k+</div>
                            <div className="art-action-collection"><i className="flaticon-plus-sign" /></div>
                          </div>
                          <a href="#" className="place-bid">Place Bid</a>
                          <a href="art-details.html"><img src="assets/img/art/624415f0c23c9169046500.gif" alt="art-img" /></a>
                        </div>
                        <div className="art-item-content pos-rel">
                          <div className="art-3dots-menu">
                            <div className="art-3dots-action">
                              <ul>
                                <li><a href="#"><i className="fal fa-share-alt" />Share</a>
                                </li>
                                <li><a href="#"><i className="fal fa-flag-alt" />Report</a>
                                </li>
                              </ul>
                            </div>
                            <button className="art-3dots-icon"><i className="fal fa-ellipsis-v" /></button>
                          </div>
                          <div className="artist">
                            <div className="profile-img pos-rel">
                              <a href="creator-profile.html"><img src="assets/img/profile/profile6.jpg" alt="profile-img" /></a>
                              <div className="profile-verification verified">
                                <i className="fas fa-check" />
                              </div>
                            </div>
                            <div className="artist-id">@jerrifo</div>
                          </div>
                          <h4 className="art-name"><a href="art-details.html">Juice Drinking</a></h4>
                          <div className="art-meta-info">
                            <div className="art-meta-item">
                              <div className="art-meta-type">Current Bid</div>
                              <div className="art-price">23.48 ETH</div>
                            </div>
                            <div className="art-activity-btn">
                              <a href="activity.html" className="art-activity"><i className="fal fa-waveform-path" />Activity</a>
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
          {/* artwork area end  */}
          {/* work-process area start  */}
          <section className="work-process-area pt-110 pb-100">
            <div className="container">
              <div className="row wow fadeInUp">
                <div className="col-lg-12">
                  <div className="section-title1 pos-rel text-center mb-40">
                    <h2 className="section-main-title1">Create and sell your NFTs</h2>
                    <p>Here are a few reasons why you should choose East for sell your NFT</p>
                  </div>
                </div>
              </div>
              <div className="work-processes">
                <div className="row wow fadeInUp">
                  <div className="col-lg-4 col-md-6">
                    <div className="work-process-single mb-30 pos-rel">
                      <div className="step">Step</div>
                      <div className="work-process-content">
                        <div className="process-icon mb-40">
                          <img src="assets/img/shape/connect-icon.png" alt="img" />
                        </div>
                        <h4 className="process-title">
                          <a href="wallet-connect.html">Connect your wallet</a>
                        </h4>
                        <p className>NFTs are the latest and greatest application of blockchain technology, and
                          marketplace has become theplatform for NFT.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="work-process-single mb-30 pos-rel">
                      <div className="step">Step</div>
                      <div className="work-process-content">
                        <div className="process-icon mb-40">
                          <img src="assets/img/shape/create-collection.png" alt="img" />
                        </div>
                        <h4 className="process-title">
                          <a href="explore-arts.html">Create Collection</a>
                        </h4>
                        <p className>East is the premier marketplace for which are digital items you can truly own.
                          Digital Items have existed like this.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="work-process-single mb-30 pos-rel">
                      <div className="step">Step</div>
                      <div className="work-process-content">
                        <div className="process-icon mb-40">
                          <img src="assets/img/shape/list-icon.png" alt="img" />
                        </div>
                        <h4 className="process-title">
                          <a href="upload.html">List them to sale</a>
                        </h4>
                        <p className>List the collection &amp; artworks to the blockchain network acts as the
                          decentralized ledger that tracks the ownership.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* work-process area end  */}
        </main>
        {/* footer area start  */}
        <footer data-background className="footer1-bg">
          <section className="footer-area footer-area1 footer-area1-bg pt-100 pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                    <div className="footer-logo mb-30">
                      <a href="index.html" className="logo-bb"><img style={{width: '60px', height : '60px'}} src="assets/img/logo/logo.png" alt="logo-img" /></a>
                      <a href="index.html" className="logo-bw"><img style={{width: '60px', height : '60px'}} src="assets/img/logo/logo.png" alt="logo-img" /></a>
                    </div>
                    <p className="mb-35">A unique marketplace for both digital, and redeemable NFTs embedded company’s share and assets. </p>
                    <div className="social__links footer__social">
                      <ul>
                        <li><a href="https://t.me/eastmarketplace"><i className="fab fa-telegram" /></a></li>
                        <li><a href="https://twitter.com/eastcoin2"><i className="fab fa-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/Eastnftmarkeplace/"><i className="fab fa-instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/company/eastcoin"><i className="fab fa-linkedin-in" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                    <div className="footer-widget-title">
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
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                    <div className="footer-widget-title">
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
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                    <div className="footer-widget-title">
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
          <div className="copyright-area copyright1-area">
            <div className="container">
              <div className="copyright1-inner">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-6">
                    <div className="copyright-text copyright1-text">
                      © Powered &amp; Created by <a href="http://eurufly.com/">Eurufly</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="irc-item copyright-support copyright1-support copyright-support-lines">
                      <div className="irc-item-icon">
                        <i className="flaticon-support" />
                      </div>
                      <div className="irc-item-content">
                        <p>Have a question? Call us 24/7</p>
                        <a href="tel:(234)8495837283">(234) 8495837283</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <form className="subscribe-form subscribe-form-copyright1">
                      <input type="text" placeholder="Enter email" />
                      <button type="submit">Subscribe<i className="fas fa-paper-plane" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer area end  */}
        {/* pre loader area start */}
        <div id="loading">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                <img style={{width: '60px', height : '60px'}} src="assets/img/logo/logo.png" alt="logo-img" />
                <div style={{fontWeight: 'bold'}}>EastMarketplace</div>
                <img className="loading-logo" src="assets/img/logo/preloader.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* pre loader area end */}
        {/* back to top start */}
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* back to top end */}
        {/* dark mode button start */}
        <div className="mode-switch-wrapper my_switcher setting-option">
          <input type="checkbox" className="checkbox" id="chk" />
          <label className="label" htmlFor="chk">
            <i className="fas fa-moon setColor dark theme__switcher-btn" data-theme="dark" />
            <i className="fas fa-sun setColor light theme__switcher-btn" data-theme="light" />
            <span className="ball" />
          </label>
        </div>

    </div>
  )
}
