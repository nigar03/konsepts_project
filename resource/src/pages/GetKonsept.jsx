import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { recentpost, relatedpost } from '../data/konsept';
import PostsCard from '../components/PostsCard';
import RecentCard from '../components/RecentCard';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';

const GetKonsept = () => {
    const [lang] = useContext(LangContext);
    return (
        <>
            <div className='get-konsept'>
                <div className="old-brand">
                    <p>{lang === "az" ? "Ev-Kasa-Köhnə Tam Yeni" : "Home-Bowl-Old Brand New"}</p>
                </div>
                <div className="about-konsept container my-5">
                    <div className="get-swiper col col-sm-12 col-md-9">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/Portfolio_single_2-3.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/Portfolio_single_2-2.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/Portfolio_single_2-4.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                        <div className="date my-5" >
                            <p className='text-secondary fs-5' style={{ fontFamily: "cursive" }}>March 31,2020-Bowls-By Sara Marling</p>
                            <h3>{lang === "az" ? "Köhnə Brend Yeni" : "Old Brend New"}</h3>
                            <p className='my-4'>{lang === "az" ? "Köhnə Yepyeni', innovasiya həyəcanı ilə birləşmiş nostaljinin ebedi cazibəsini özündə cəmləşdirən paradoksal bir termindir. Bu yan-yana gələcəyə qucaq açaraq keçmişi qoruyub saxlamağa davam edən insan heyranlığını əks etdirir. Bu müəmmalı 'Köhnə Yeni' ifadəsində biz ən qabaqcıl ideyalar və tərəqqi ilə harmonik şəkildə mövcud olan ənənə və irsin təntənəsini tapırıq. O, vintage konsepsiyalarına, məhsullarına və ya təcrübələrinə yeni nəfəs vermək, onları müasir auditoriya üçün canlandırmaq qabiliyyətini simvollaşdırır. Təmir edilmiş tarixi binaya, yenidən canlanmış üzüm moda trendinə və ya yenidən təsəvvür edilmiş klassik reseptə tətbiq olunmasından asılı olmayaraq, ənənə və təkamül arasında sinerji ifadə edir. , keçmişin tanışlığı ilə gələcəyin vədi arasında körpü təklif edir. Bu, bizə xatırladır ki, keçmiş ilham mənbəyidir və yenilik keçmiş dövrlərin əziz xəzinələrinə təzə canlılıq verə bilər." : "Old Brand New' is a paradoxical term that encapsulates the timeless allure of nostalgia fused with the excitement of innovation. This juxtaposition of  reflects the enduring human fascination with preserving the past while embracing the future. In this enigmatic phrase, 'Old Brand New,' we find a celebration of tradition and heritage coexisting harmoniously with cutting-edge ideas and progress. It symbolizes the ability to breathe new life into vintage concepts, products, or experiences, reinvigorating them for modern audiences.Whether applied to a renovated historic building, a revived vintage fashion trend, or a reimagined classic recipe, signifies the synergy between tradition and evolution, offering a bridge between the familiarity of the past and the promise of the future. It reminds us that the past is a wellspring of inspiration, and innovation can breathe fresh vitality into the cherished treasures of bygone eras."}</p>
                            <p>{lang === "az" ? "Köhnə ənənələr və yeni innovasiyalar tez-tez kəsişir, nostalji və tərəqqinin füsunkar qarışığı yaradır, keçmişlə indinin uyğunlaşdığı bir qaynaşma, müasir bir bükülmə ilə tanış olana həyat nəfəs verir və “Köhnə Marka Yeni” kimi tanınan maraqlı konsepsiyaya səbəb olur. ,' gələcəyin həyəcanı ilə iç-içə olan tarixin davamlı cazibəsinin qeyd edilməsi, mövcud olan və ola biləcək arasında körpü, ideyaların və təcrübələrin daimi təkamülünün sübutu" : "Old traditions and new innovations often intersect, creating a fascinating blend of nostalgia and progress, a fusion where the past and the present harmonize, breathing life into the familiar with a contemporary twist, giving rise to the intriguing concept known as 'Old Brand New,' a celebration of the enduring charm of history entwined with the excitement of the future, offering a bridge between what was and what can be, a testament to the perpetual evolution of ideas and experiences."}</p>
                            <div className='d-flex align-items-center justify-content-between my-5'>
                                <div className="circle">
                                    <p>"</p>
                                </div>
                                <div className="for-konsept">
                                    <p className='mx-3 text-dark'>{lang === "az" ? "HEÇ BİR GÖZ BİZİM AĞRIDAN QAÇMAYACAQ. KOR OLMAYILAR ÇIXMAZLAR, İFADƏ OLANLAR GÜNAHLI OLAR." : "E CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA."}</p>
                                </div>
                            </div>
                            <p className='my-3'>{lang === "az" ? "Köhnə ənənələr və yeni innovasiyalar tez-tez kəsişir, nostalji və tərəqqinin füsunkar qarışığı yaradır, keçmişlə indinin uyğunlaşdığı bir qaynaşma, müasir bir bükülmə ilə tanış olana həyat nəfəs verir və “Köhnə Marka Yeni” kimi tanınan maraqlı konsepsiyaya səbəb olur. ,' gələcəyin həyəcanı ilə iç-içə olan tarixin davamlı cazibəsinin qeyd edilməsi, mövcud olan və ola biləcək arasında körpü, ideyaların və təcrübələrin daimi təkamülünün sübutu" : "Old traditions and new innovations often intersect, creating a fascinating blend of nostalgia and progress, a fusion where the past and the present harmonize, breathing life into the familiar with a contemporary twist, giving rise to the intriguing concept known as 'Old Brand New,' a celebration of the enduring charm of history entwined with the excitement of the future, offering a bridge between what was and what can be, a testament to the perpetual evolution of ideas and experiences."}</p>
                            <div className="design my-5">
                                <div className="design-photo">
                                    <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogSingle-2.jpg" width={313} alt="" />

                                </div>
                                <div className="design-photo">
                                    <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogSingle-3.jpg" alt="" width={313} />
                                </div>
                                <div className="design-photo">
                                    <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogSingle-4.jpg" alt="" width={313} />
                                </div>
                            </div>
                            <p> {lang === "az" ? '“Old Brand New” paradoksal termindir və yenilik həyəcanı ilə birləşmiş nostaljinin ebedi cazibəsini özündə cəmləşdirir. “Köhnə” və “yeni”nin bu yan-yana gəlişi, gələcəyi qucaqlayarkən keçmişi qoruyub saxlamağa davam edən insan məftunluğunu əks etdirir.Bu müəmmalı "Köhnə Yeni" ifadəsində biz ən müasir ideyalar və tərəqqi ilə harmonik şəkildə mövcud olan ənənə və irsin qeyd olunmasını tapırıq. O, vintage konsepsiyalara, məhsullara və ya təcrübələrə yeni həyat nəfəs vermək, onları müasir auditoriya üçün canlandırmaq qabiliyyətini simvollaşdırır.' : '"Old Brand New" is a paradoxical term that encapsulates the timeless allure of nostalgia fused with the excitement of innovation. This juxtaposition of "old" and "new" reflects the enduring human fascination with preserving the past while embracing the future.In this enigmatic phrase, "Old Brand New," we find a celebration of tradition and heritage coexisting harmoniously with cutting-edge ideas and progress. It symbolizes the ability to breathe new life into vintage concepts, products, or experiences, reinvigorating them for modern audiences.'}</p>
                            <p className='sosial-media py-4'>
                                <a href="https://www.facebook.com/QodeInteractive/" className='text-decoration-none text-secondary '> <i className="fa-brands fa-facebook p-1 fs-3"></i></a>
                                <a href="https://twitter.com/QodeInteractive" className='text-decoration-none text-secondary'> <i className="fa-brands fa-twitter fs-3 p-1"></i></a>
                                <a href="https://www.linkedin.com/checkpoint/challenge/AgFzgcJvORu8YgAAAYsPpfw60Ot-vME16pjgykvUXWFLN8QFu4-e9T1gMWJORPWwUJmY0M4CYj6EBWAzP_eieT8CpC4CEQ?ut=33Cx2VFywowWY1" className='text-decoration-none text-secondary'> <i className="fa-brands fa-linkedin p-1 fs-3"></i></a>
                                <a href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fkonsept.qodeinteractive.com%2Ffive-ways-to-style-a-room%2F&description=Old+Brand+New" className='text-decoration-none text-secondary'> <i className="fa-brands fa-pinterest p-1 fs-3"></i></a>
                            </p>
                            <div className="sara my-5 d-flex align-items-center justify-content-center container">
                                <div className="about-sara container">
                                    <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/05/author.jpg" alt="" width={215} />
                                    <div className="sara-text ">
                                        <h5>SARA MARLING</h5>
                                        <p>{lang==="az" ? 'Sara Marlinq yaradıcı qüvvə, canlı rənglərlə rəsm çəkən, ehtirasla heykəl qoyan, fəsahətli qələmlə yazan, dünyada silinməz iz qoyan uzaqgörən rəssamdır.' :'Sara Marling is a creative force, a visionary artist who paints with vivid colors, sculpts with passion, and writes with an eloquent pen, leaving an indelible mark on the world'}</p>
                                    </div>
                                </div>
                            </div>
                            <h4 >{lang==="az"? "3 ŞƏRH" : "3 COMMENTS"}</h4>
                            <div className="comments my-5">
                                <div className="user-comment d-flex align-items-center ">
                                    <img className='mx-3' src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogSingle_autor-1-100x100.jpg" alt="" width={80} />
                                    <div className="user-text mx-5">
                                        <p style={{ fontFamily: "cursive" }}>March 31,2020</p>
                                        <h5>JOEL LEONARD</h5>
                                        <p>{lang==="az" ? "Mən sadəcə bu heyrətamiz məhsul veb saytına rast gəldim! Parlaq dizayn, istifadəçi dostu interfeysi və yüksək keyfiyyətli məhsulların geniş çeşidi onu bütün alış-veriş ehtiyaclarım üçün yeni seçim edir." : "I just stumbled upon this amazing product website! The sleek design, user-friendly interface, and a vast array of high-quality products make it my new go-to for all my shopping needs."}</p>
                                    </div>
                                </div>
                                <div className="user-comment d-flex align-items-center my-5 ">
                                    <img className='mx-3' src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogSingle_autor-2-100x100.jpg" alt="" width={80} />
                                    <div className="user-text mx-5">
                                        <p style={{ fontFamily: "cursive" }}>March 31,2020</p>
                                        <h5>ELIZABETH DAVIS</h5>
                                        <p>{lang==="az" ? "Bu yaxınlarda bu fantastik məhsul veb saytını kəşf etdim. Onun zərif tərtibatı, intuitiv istifadəçi interfeysi və yüksək səviyyəli məhsulların geniş çeşidi tez bir zamanda onu bütün onlayn alış-verişlərim üçün ən çox bəyəndiyim məkana çevirdi." : "I recently discovered this fantastic product website. Its sleek layout, intuitive user interface, and extensive range of top-notch products have quickly made it my preferred destination for all my online shopping."}</p>
                                    </div>
                                </div>
                                <div className="user-comment d-flex align-items-center my-5 ">
                                    <img className='mx-3' src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogSingle_autor-3-100x100.jpg" alt="" width={80} />
                                    <div className="user-text mx-5">
                                        <p style={{ fontFamily: "cursive" }}>March 31,2020</p>
                                        <h5>GEORGIA HEWITT</h5>
                                        <p>{lang==='az'? "Bu məhsulun veb saytını daha tez tapmadığıma inana bilmirəm! Təmiz və asan naviqasiya olunan dizayn, təsirli məhsul seçimi ilə birlikdə onu bütün alış-veriş arzularım üçün bir pəncərə halına gətirdi." : "I can't believe I didn't find this product website sooner! The clean and easy-to-navigate design, along with the impressive product selection, has made it my one-stop shop for all my shopping desires."}</p>
                                    </div>
                                </div>
                            </div>
                            <h4 className='my-5'>{lang==="az"? "ƏLAQƏLİ POSTLAR" : "RELATED POSTS"}</h4>
                            <div className="related-cards">
                                {relatedpost.map(item => (
                                    <PostsCard
                                        one={item.photoone}
                                        two={item.phototwo}
                                        three={item.photothree}
                                        title={item.title}
                                        date={item.date}
                                        about={item.about}
                                        key={item.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="right-side col col sm-12 md-3 " >
                        <img className='right-sara-photo' src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/Author_image.png" alt="" />
                        <div className="sara-second-text my-5 ">
                            <h5 >SARA MARLIN</h5>
                            <p>{lang==="az" ? 'Sara Marlinq yaradıcı qüvvədir, canlı rənglərlə rəsm çəkən uzaqgörən rəssamdır.':"Sara Marling is a creative force, a visionary artist who paints with vivid colors."}</p>
                        </div>
                        <h5 className=''>{lang==="az"? 'KATEQORİYALAR': "CATAGORIES"}</h5>
                        <ul className="list-group list-group-flush my-3 ">
                            <li className="list-group-item w-100">{lang==="az"? "Qablar" :"Bowls"}</li>
                            <li className="list-group-item w-100">{lang==="az"?'Jars':'Jars'}</li>
                            <li className="list-group-item w-100">{lang==="az"?'Kaftanlar':'Kaftans'}</li>
                            <li className="list-group-item w-100">{lang==="az"?'Cədvəllər':'Tables'}</li>
                            <li className="list-group-item w-100">{lang==="az"?'Divar lövhələri':'Wall Plates'}</li>
                        </ul>
                        <div className='second-photo'>
                            <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/BlogList_sidebar-8.jpg" alt="" width={277} height={297} />
                        </div>
                        <div className="tags ">
                            <h5 className=' my-5'>{lang==="az"? "ETİKETLƏR":"TAGS"}</h5>
                            <p className=''>{lang==="az"? "İncəsənət-Yaradıcı-Dekorasiya-Dizayn-Dizayn-Kəşf Edin-Əl-Ev-İnteryeri":"Art-Creative-Decor-Decoration-Design-Explore-Handmade-Home-Interior"}</p>
                        </div>
                        <div className="instagram my-5 ">
                            <h5 >INSTAGRAM</h5>
                            <div className="insta-photo d-flex align-items-center justify-content-between ">
                                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogSingle-4.jpg" alt="" width={85.66} height={63.3} />
                                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/BlogMasonary-6.jpg" alt="" width={85.66} height={85.66} />
                                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/Portfolio_single_2-2.jpg" alt="" width={85.66} height={63.3} />
                            </div>
                            <div className="insta-photo d-flex align-items-center justify-content-between">
                                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogMasonary-2.jpg" alt="" width={85.66} height={85.66} />
                                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/Home4_section4-3.jpg" alt="" width={85.66} height={63.3} />
                                <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/BlogSingle-2.jpg" alt="" width={85.66} height={85.66} />
                            </div>
                        </div>
                        <div className="follow-us my-5">
                            <h5 className=''>{lang==="az"? "BİZİ İZLƏ:" :"FOLLOW US:"}</h5>
                            <p className='sosial-media'>
                                <a href="https://www.facebook.com/QodeInteractive/" className='text-decoration-none text-secondary '> <i className="fa-brands fa-facebook fs-3"></i></a>
                                <a href="https://twitter.com/QodeInteractive" className='text-decoration-none text-secondary'> <i className="fa-brands fa-twitter p-2 fs-3 "></i></a>
                                <a href="https://www.linkedin.com/checkpoint/challenge/AgFzgcJvORu8YgAAAYsPpfw60Ot-vME16pjgykvUXWFLN8QFu4-e9T1gMWJORPWwUJmY0M4CYj6EBWAzP_eieT8CpC4CEQ?ut=33Cx2VFywowWY1" className='text-decoration-none text-secondary'> <i className="fa-brands fa-linkedin p-2 fs-3"></i></a>
                                <a href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fkonsept.qodeinteractive.com%2Ffive-ways-to-style-a-room%2F&description=Old+Brand+New" className='text-decoration-none text-secondary'> <i className="fa-brands fa-pinterest fs-3"></i></a>
                            </p>
                        </div>
                        <div className="recent-post my-5">
                            <h5 className=''>{lang==="az"? "SON POSTLAR":"RECENT POSTS"}</h5>
                            {recentpost.map(item => (
                                <RecentCard
                                    photo={item.image}
                                    title={item.title}
                                    date={item.date}
                                    key={item.id}
                                    titleaz={item.titleaz}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetKonsept