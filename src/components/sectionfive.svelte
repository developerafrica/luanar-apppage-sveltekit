<script>
    export let storesData;


</script>
<article class="section-two-cards">
    <div class="sts-sect">
        <header>
            <div class="hd">
                <h1>LUANAR BUSINESS</h1>
            </div>
        </header>

        <div class="card-container">
            <div class="cd-cnt">
                {#each storesData as {id,name,description,products}}

                <div class="card">
                    <div class="cd">
                        <a href="/products/{id}">
                            <header>
                                <div class="hd">
                                    <div class="artist-profile">
                                    
                                        <div class="ap-txt">
                                            <h1>{name}</h1>
                                            <p>{products[0].title}</p>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <main>
                                <div class="mn">
                                    <img src="{products[0].image}" alt="artists work">
                                </div>
                            </main>
                            <footer>
                                <div class="ft">
                                    <div class="art-tag">
                                        <p>{products[0].type}</p>
                                    </div>
                                    <div class="art-txt">
                                        <p>{description}</p>
                                    </div>
                                    <div class="art-link">
                                        <a href="products/{id}">
                                        <div class="artist-link">
                                            <div class="al">
                                               
                                                    <svg width="121" height="37" viewBox="0 0 121 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="121" height="37" rx="5" fill="#E9F5FA"/>
                                                        <path d="M108 22H101C98.6667 22 97 20.3333 97 18C97 15.6667 98.6667 14 101 14H112C112.544 14 113 13.5439 113 13C113 12.4561 112.544 12 112 12H101C97.6842 12 95 14.6842 95 18C95 21.3158 97.6842 24 101 24H108C108.544 24 109 23.5439 109 23C109 22.4561 108.544 22 108 22ZM107.298 9.70175L111.193 13.5965C111.421 13.8246 111.421 12.1754 111.193 12.4035L107.298 16.2982C107.105 16.4737 107 16.7193 107 17C107 17.5439 107.456 18 108 18C108.281 18 108.526 17.8947 108.702 17.7018L112.596 13.807C113.053 13.3684 113.053 12.6316 112.596 12.193L108.702 8.29825C108.526 8.10526 108.281 8 108 8C107.456 8 107 8.45614 107 9C107 9.2807 107.105 9.52632 107.298 9.70175Z" fill="#333333"/>
                                                        <path d="M26.5795 21.1364C25.9659 21.1364 25.4375 20.9915 24.9943 20.7017C24.5511 20.4119 24.2102 20.0128 23.9716 19.5043C23.733 18.9957 23.6136 18.4148 23.6136 17.7614C23.6136 17.0966 23.7358 16.5099 23.9801 16.0014C24.2273 15.4901 24.571 15.0909 25.0114 14.804C25.4545 14.5142 25.9716 14.3693 26.5625 14.3693C27.0227 14.3693 27.4375 14.4545 27.8068 14.625C28.1761 14.7955 28.4787 15.0341 28.7145 15.3409C28.9503 15.6477 29.0966 16.0057 29.1534 16.4148H28.1477C28.071 16.1165 27.9006 15.8523 27.6364 15.6222C27.375 15.3892 27.0227 15.2727 26.5795 15.2727C26.1875 15.2727 25.8438 15.375 25.5483 15.5795C25.2557 15.7812 25.027 16.0668 24.8622 16.4361C24.7003 16.8026 24.6193 17.233 24.6193 17.7273C24.6193 18.233 24.6989 18.6733 24.858 19.0483C25.0199 19.4233 25.2472 19.7145 25.5398 19.9219C25.8352 20.1293 26.1818 20.233 26.5795 20.233C26.8409 20.233 27.0781 20.1875 27.2912 20.0966C27.5043 20.0057 27.6847 19.875 27.8324 19.7045C27.9801 19.5341 28.0852 19.3295 28.1477 19.0909H29.1534C29.0966 19.4773 28.956 19.8253 28.7315 20.1349C28.5099 20.4418 28.2159 20.6861 27.8494 20.8679C27.4858 21.0469 27.0625 21.1364 26.5795 21.1364ZM32.5497 21.1534C32.1349 21.1534 31.7585 21.0753 31.4205 20.919C31.0824 20.7599 30.8139 20.5312 30.6151 20.233C30.4162 19.9318 30.3168 19.5682 30.3168 19.142C30.3168 18.767 30.3906 18.4631 30.5384 18.2301C30.6861 17.9943 30.8835 17.8097 31.1307 17.6761C31.3778 17.5426 31.6506 17.4432 31.9489 17.3778C32.25 17.3097 32.5526 17.2557 32.8565 17.2159C33.2543 17.1648 33.5767 17.1264 33.8239 17.1009C34.0739 17.0724 34.2557 17.0256 34.3693 16.9602C34.4858 16.8949 34.544 16.7812 34.544 16.6193V16.5852C34.544 16.1648 34.429 15.8381 34.1989 15.6051C33.9716 15.3722 33.6264 15.2557 33.1634 15.2557C32.6832 15.2557 32.3068 15.3608 32.0341 15.571C31.7614 15.7812 31.5696 16.0057 31.4588 16.2443L30.5043 15.9034C30.6747 15.5057 30.902 15.196 31.1861 14.9744C31.473 14.75 31.7855 14.5937 32.1236 14.5057C32.4645 14.4148 32.7997 14.3693 33.1293 14.3693C33.3395 14.3693 33.581 14.3949 33.8537 14.446C34.1293 14.4943 34.3949 14.5952 34.6506 14.7486C34.9091 14.902 35.1236 15.1335 35.294 15.4432C35.4645 15.7528 35.5497 16.1676 35.5497 16.6875V21H34.544V20.1136H34.4929C34.4247 20.2557 34.3111 20.4077 34.152 20.5696C33.9929 20.7315 33.7813 20.8693 33.517 20.983C33.2528 21.0966 32.9304 21.1534 32.5497 21.1534ZM32.7031 20.25C33.1009 20.25 33.4361 20.1719 33.7088 20.0156C33.9844 19.8594 34.1918 19.6577 34.331 19.4105C34.473 19.1634 34.544 18.9034 34.544 18.6307V17.7102C34.5014 17.7614 34.4077 17.8082 34.2628 17.8509C34.1207 17.8906 33.956 17.9261 33.7685 17.9574C33.5838 17.9858 33.4034 18.0114 33.2273 18.0341C33.054 18.054 32.9134 18.071 32.8054 18.0852C32.544 18.1193 32.2997 18.1747 32.0724 18.2514C31.848 18.3253 31.6662 18.4375 31.527 18.5881C31.3906 18.7358 31.3224 18.9375 31.3224 19.1932C31.3224 19.5426 31.4517 19.8068 31.7102 19.9858C31.9716 20.1619 32.3026 20.25 32.7031 20.25ZM40.2319 14.4545V15.3068H36.8398V14.4545H40.2319ZM37.8285 12.8864H38.8342V19.125C38.8342 19.4091 38.8754 19.6222 38.9577 19.7642C39.043 19.9034 39.1509 19.9972 39.2816 20.0455C39.4151 20.0909 39.5558 20.1136 39.7035 20.1136C39.8143 20.1136 39.9052 20.108 39.9762 20.0966C40.0472 20.0824 40.104 20.071 40.1467 20.0625L40.3512 20.9659C40.283 20.9915 40.1879 21.017 40.0657 21.0426C39.9435 21.071 39.7887 21.0852 39.6012 21.0852C39.3171 21.0852 39.0387 21.0241 38.766 20.902C38.4961 20.7798 38.2717 20.5938 38.0927 20.3438C37.9165 20.0938 37.8285 19.7784 37.8285 19.3977V12.8864ZM43.6708 21.1534C43.256 21.1534 42.8796 21.0753 42.5415 20.919C42.2035 20.7599 41.935 20.5312 41.7362 20.233C41.5373 19.9318 41.4379 19.5682 41.4379 19.142C41.4379 18.767 41.5117 18.4631 41.6594 18.2301C41.8072 17.9943 42.0046 17.8097 42.2518 17.6761C42.4989 17.5426 42.7717 17.4432 43.07 17.3778C43.3711 17.3097 43.6737 17.2557 43.9776 17.2159C44.3754 17.1648 44.6978 17.1264 44.945 17.1009C45.195 17.0724 45.3768 17.0256 45.4904 16.9602C45.6069 16.8949 45.6651 16.7812 45.6651 16.6193V16.5852C45.6651 16.1648 45.5501 15.8381 45.32 15.6051C45.0927 15.3722 44.7475 15.2557 44.2844 15.2557C43.8043 15.2557 43.4279 15.3608 43.1552 15.571C42.8825 15.7812 42.6907 16.0057 42.5799 16.2443L41.6254 15.9034C41.7958 15.5057 42.0231 15.196 42.3072 14.9744C42.5941 14.75 42.9066 14.5937 43.2447 14.5057C43.5856 14.4148 43.9208 14.3693 44.2504 14.3693C44.4606 14.3693 44.7021 14.3949 44.9748 14.446C45.2504 14.4943 45.516 14.5952 45.7717 14.7486C46.0302 14.902 46.2447 15.1335 46.4151 15.4432C46.5856 15.7528 46.6708 16.1676 46.6708 16.6875V21H45.6651V20.1136H45.614C45.5458 20.2557 45.4322 20.4077 45.2731 20.5696C45.114 20.7315 44.9023 20.8693 44.6381 20.983C44.3739 21.0966 44.0515 21.1534 43.6708 21.1534ZM43.8242 20.25C44.2219 20.25 44.5572 20.1719 44.8299 20.0156C45.1055 19.8594 45.3129 19.6577 45.4521 19.4105C45.5941 19.1634 45.6651 18.9034 45.6651 18.6307V17.7102C45.6225 17.7614 45.5288 17.8082 45.3839 17.8509C45.2418 17.8906 45.0771 17.9261 44.8896 17.9574C44.7049 17.9858 44.5245 18.0114 44.3484 18.0341C44.1751 18.054 44.0344 18.071 43.9265 18.0852C43.6651 18.1193 43.4208 18.1747 43.1935 18.2514C42.9691 18.3253 42.7873 18.4375 42.6481 18.5881C42.5117 18.7358 42.4435 18.9375 42.4435 19.1932C42.4435 19.5426 42.5728 19.8068 42.8313 19.9858C43.0927 20.1619 43.4237 20.25 43.8242 20.25ZM49.5121 12.2727V21H48.5064V12.2727H49.5121ZM54.0131 21.1364C53.4222 21.1364 52.9038 20.9957 52.4577 20.7145C52.0146 20.4332 51.668 20.0398 51.418 19.5341C51.1708 19.0284 51.0472 18.4375 51.0472 17.7614C51.0472 17.0795 51.1708 16.4844 51.418 15.9759C51.668 15.4673 52.0146 15.0724 52.4577 14.7912C52.9038 14.5099 53.4222 14.3693 54.0131 14.3693C54.604 14.3693 55.1211 14.5099 55.5643 14.7912C56.0103 15.0724 56.3569 15.4673 56.604 15.9759C56.854 16.4844 56.979 17.0795 56.979 17.7614C56.979 18.4375 56.854 19.0284 56.604 19.5341C56.3569 20.0398 56.0103 20.4332 55.5643 20.7145C55.1211 20.9957 54.604 21.1364 54.0131 21.1364ZM54.0131 20.233C54.462 20.233 54.8313 20.1179 55.1211 19.8878C55.4109 19.6577 55.6254 19.3551 55.7646 18.9801C55.9038 18.6051 55.9734 18.1989 55.9734 17.7614C55.9734 17.3239 55.9038 16.9162 55.7646 16.5384C55.6254 16.1605 55.4109 15.8551 55.1211 15.6222C54.8313 15.3892 54.462 15.2727 54.0131 15.2727C53.5643 15.2727 53.195 15.3892 52.9052 15.6222C52.6154 15.8551 52.4009 16.1605 52.2617 16.5384C52.1225 16.9162 52.0529 17.3239 52.0529 17.7614C52.0529 18.1989 52.1225 18.6051 52.2617 18.9801C52.4009 19.3551 52.6154 19.6577 52.9052 19.8878C53.195 20.1179 53.5643 20.233 54.0131 20.233ZM61.1562 23.5909C60.6705 23.5909 60.2528 23.5284 59.9034 23.4034C59.554 23.2812 59.2628 23.1193 59.0298 22.9176C58.7997 22.7188 58.6165 22.5057 58.4801 22.2784L59.2812 21.7159C59.3722 21.8352 59.4872 21.9716 59.6264 22.125C59.7656 22.2812 59.956 22.4162 60.1974 22.5298C60.4418 22.6463 60.7614 22.7045 61.1562 22.7045C61.6847 22.7045 62.1207 22.5767 62.4645 22.321C62.8082 22.0653 62.9801 21.6648 62.9801 21.1193V19.7898H62.8949C62.821 19.9091 62.7159 20.0568 62.5795 20.233C62.446 20.4062 62.2528 20.5611 62 20.6974C61.75 20.831 61.4119 20.8977 60.9858 20.8977C60.4574 20.8977 59.983 20.7727 59.5625 20.5227C59.1449 20.2727 58.8139 19.9091 58.5696 19.4318C58.3281 18.9545 58.2074 18.375 58.2074 17.6932C58.2074 17.0227 58.3253 16.4389 58.5611 15.9418C58.7969 15.4418 59.125 15.0554 59.5455 14.7827C59.9659 14.5071 60.4517 14.3693 61.0028 14.3693C61.429 14.3693 61.767 14.4403 62.017 14.5824C62.2699 14.7216 62.4631 14.8807 62.5966 15.0597C62.733 15.2358 62.8381 15.3807 62.9119 15.4943H63.0142V14.4545H63.9858V21.1875C63.9858 21.75 63.858 22.2074 63.6023 22.5597C63.3494 22.9148 63.0085 23.1747 62.5795 23.3395C62.1534 23.5071 61.679 23.5909 61.1562 23.5909ZM61.1222 19.9943C61.5256 19.9943 61.8665 19.902 62.1449 19.7173C62.4233 19.5327 62.6349 19.267 62.7798 18.9205C62.9247 18.5739 62.9972 18.1591 62.9972 17.6761C62.9972 17.2045 62.9261 16.7884 62.7841 16.4276C62.642 16.0668 62.4318 15.7841 62.1534 15.5795C61.875 15.375 61.5313 15.2727 61.1222 15.2727C60.696 15.2727 60.3409 15.3807 60.0568 15.5966C59.7756 15.8125 59.5639 16.1023 59.4219 16.4659C59.2827 16.8295 59.2131 17.233 59.2131 17.6761C59.2131 18.1307 59.2841 18.5327 59.4261 18.8821C59.571 19.2287 59.7841 19.5014 60.0653 19.7003C60.3494 19.8963 60.7017 19.9943 61.1222 19.9943ZM69.9517 18.3239V14.4545H70.9574V21H69.9517V19.892H69.8835C69.7301 20.2244 69.4915 20.5071 69.1676 20.7401C68.8438 20.9702 68.4347 21.0852 67.9403 21.0852C67.5312 21.0852 67.1676 20.9957 66.8494 20.8168C66.5313 20.6349 66.2813 20.3622 66.0994 19.9986C65.9176 19.6321 65.8267 19.1705 65.8267 18.6136V14.4545H66.8324V18.5455C66.8324 19.0227 66.9659 19.4034 67.233 19.6875C67.5028 19.9716 67.8466 20.1136 68.2642 20.1136C68.5142 20.1136 68.7685 20.0497 69.027 19.9219C69.2884 19.794 69.5071 19.598 69.6832 19.3338C69.8622 19.0696 69.9517 18.733 69.9517 18.3239ZM75.5437 21.1364C74.913 21.1364 74.369 20.9972 73.9116 20.7188C73.457 20.4375 73.1062 20.0455 72.859 19.5426C72.6147 19.0369 72.4925 18.4489 72.4925 17.7784C72.4925 17.108 72.6147 16.517 72.859 16.0057C73.1062 15.4915 73.4499 15.0909 73.8903 14.804C74.3335 14.5142 74.8505 14.3693 75.4414 14.3693C75.7823 14.3693 76.119 14.4261 76.4513 14.5398C76.7837 14.6534 77.0863 14.8381 77.359 15.0938C77.6317 15.3466 77.8491 15.6818 78.011 16.0994C78.1729 16.517 78.2539 17.0312 78.2539 17.642V18.0682H73.2085V17.1989H77.2312C77.2312 16.8295 77.1573 16.5 77.0096 16.2102C76.8647 15.9205 76.6573 15.6918 76.3874 15.5241C76.1204 15.3565 75.805 15.2727 75.4414 15.2727C75.0408 15.2727 74.6942 15.3722 74.4016 15.571C74.1119 15.767 73.8888 16.0227 73.7326 16.3381C73.5763 16.6534 73.4982 16.9915 73.4982 17.3523V17.9318C73.4982 18.4261 73.5835 18.8452 73.7539 19.1889C73.9272 19.5298 74.1673 19.7898 74.4741 19.9688C74.7809 20.1449 75.1374 20.233 75.5437 20.233C75.8079 20.233 76.0465 20.196 76.2596 20.1222C76.4755 20.0455 76.6616 19.9318 76.8178 19.7812C76.9741 19.6278 77.0948 19.4375 77.18 19.2102L78.1516 19.483C78.0494 19.8125 77.8775 20.1023 77.636 20.3523C77.3945 20.5994 77.0962 20.7926 76.7411 20.9318C76.386 21.0682 75.9869 21.1364 75.5437 21.1364Z" fill="black"/>
                                                        </svg>
                                                        
                                                
                                            </div>
                                        </div>
                                    
                                    
                                    </a></div>
                                </div>
                            </footer>
                        </a>
                        <footer>
                            <div class="ft-2">
                                <div>
                                    <div class="phone"><a href="tel://">0880164455</a></div>
                                </div>
                                <div>
                                    <div class="whatsapp"><a href="tel://">
                                        <svg width="67" height="37" viewBox="0 0 67 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="67" height="37" rx="5" fill="#1BD741"/>
                                            <g clip-path="url(#clip0_105_35)">
                                            <path d="M35 2H5V32H35V2Z" fill="#1BD741"/>
                                            <path d="M9.50884 27.5026L10.9783 22.2834C10.0334 20.6781 9.53583 18.8515 9.53583 16.9752C9.53583 11.1977 14.2361 6.49747 20.0135 6.49747C25.7909 6.49747 30.4912 11.1977 30.4912 16.9752C30.4912 22.7526 25.7909 27.4529 20.0135 27.4529C18.2133 27.4529 16.4506 26.9921 14.8912 26.1171L9.50884 27.5026ZM15.1663 24.2109L15.487 24.4067C16.8467 25.2367 18.4119 25.6755 20.0135 25.6755C24.8109 25.6755 28.7138 21.7725 28.7138 16.9752C28.7138 12.1778 24.8109 8.27483 20.0135 8.27483C15.2162 8.27483 11.3132 12.1778 11.3132 16.9752C11.3132 18.6467 11.7883 20.27 12.687 21.6694L12.9029 22.0058L12.0567 25.0113L15.1663 24.2109Z" fill="white"/>
                                            <path d="M17.0702 12.0985L16.3903 12.0615C16.1768 12.0498 15.9673 12.1212 15.8059 12.2614C15.4763 12.5476 14.9493 13.101 14.7874 13.8221C14.546 14.8972 14.9191 16.2138 15.8846 17.5304C16.8501 18.8469 18.6494 20.9534 21.831 21.8531C22.8563 22.143 23.6629 21.9476 24.2851 21.5495C24.778 21.2343 25.1177 20.7282 25.2402 20.1562L25.3487 19.6492C25.3832 19.488 25.3014 19.3245 25.1517 19.2555L22.854 18.1964C22.7048 18.1277 22.5279 18.1711 22.4276 18.3011L21.5255 19.4705C21.4574 19.5589 21.3408 19.5939 21.2354 19.5569C20.6177 19.3398 18.5485 18.4732 17.413 16.2861C17.3638 16.1912 17.3761 16.0761 17.4459 15.9952L18.308 14.9979C18.3961 14.896 18.4183 14.7529 18.3654 14.6291L17.3749 12.3119C17.3222 12.1885 17.204 12.1058 17.0702 12.0985Z" fill="white"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_105_35">
                                            <rect width="30" height="30" fill="white" transform="translate(5 2)"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                            </a></div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                {/each}

            </div>
        </div>

    </div>
</article>

<style lang="scss">
    .section-two-cards{
        .sts-sect{
            header{
                .hd{
                    h1{
                        padding: 0 1rem;
                        @include font(var(--tc), 1.3rem, 500)
                    }
                }
            }
            main{
                .mn{
                    img{
                        margin: auto;
                        height: 200px;
                    }
                }
            }
            .card-container{
                .cd-cnt{
                    padding: 0.5rem;
                    .card{
                        width: 100%;
                        background: white;
                        margin:1.1rem 0;
                        border-radius: 4px;
                        box-shadow: rgba(0, 0, 0, 0.376) 0 4px 4px 1px;
                        .cd{
                            padding: 1rem;
                            a{

                                display: block;
                            }
                            header{
                                .hd{
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    text-align: end;
                                    .artist-profile{
                                        width: 100%;
                                        
                                        .ap-txt{
                                            h1{
                                                @include font(var(--tc), 1.3rem, 600)
                                            }
                                            p{
                                                @include font(var(--tc), 1.15rem, 600)
                                            }
                                        }
                                    }
                                    .artist-link{
                                        .al{
                                            a{
                                                svg{
                                                    width: 40px;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            //main{}
                            footer{
                                .ft-2{
                                    .phone{
                                        padding: 2rem 0;
                                        @include font(var(--tc), 1.3rem, 650);
                                    }
                                    .whatsapp{
                                        background: rgba(27, 215, 65, 0.748);
                                        border-radius: 5px;
                                    }
                                }
                                .ft{
                                    .art-tag{
                                        text-align: end;

                                        padding: 1rem 0;
                                        p{
                                            background: #ead513d3;
                                            box-shadow: rgba(0, 0, 0, 0.376) 0 4px 4px 1px;
                                            display: inline !important;
                                            border-radius: 4rem;
                                            padding: 0.5rem 2rem;
                                            @include font(var(--tc), 1.3rem, 650);
                                           
                                            margin: 1rem 0;
                                        }
                                    }
                                    .art-txt{
                                        @include font(var(--tc), 1.5rem, 600);
                                        padding: 1rem 0;
                                        
                                    }
                                    .art-link{
                                        display: flex;
                                        justify-content: end;
                                        a{
                                            display: block;
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
    }
    @media only screen and (min-width: 700px){
        .card-container{
            .cd-cnt{
                display: flex;
                .card{
                    width: 50%;
                }
            }
        }
    }

</style>