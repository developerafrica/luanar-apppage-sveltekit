<article class="SectionOne">
    <div class="artSectOne">
        <div class="soTop">
            <div class="sot">
                <img src="/phone1.png" alt="app design" width={280} height={500}/>
            </div>
        </div>
        <div>
            <div class="sob">
                <ul>
                    <li>
                        <p>LUANAR APP</p>
                    </li>
                    <li>
                        <p>BETA</p>

                    </li>
                </ul>
                
                <div class="details">
                    <p>
                        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_16_7)">
                            <path d="M13.5355 14.9997L10 18.5352L6.46447 14.9997" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M10 17.0833V10.4167" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                            <path d="M12.495 12.5H15C15.8841 12.5 16.7319 12.1488 17.357 11.5237C17.9822 10.8986 18.3334 10.0507 18.3334 9.16667C18.3334 8.28262 17.9822 7.43477 17.357 6.80965C16.7319 6.18453 15.8841 5.83334 15 5.83334C15.0001 5.35477 14.8627 4.88625 14.6044 4.48343C14.346 4.08061 13.9774 3.76041 13.5424 3.56086C13.1075 3.36132 12.6243 3.29081 12.1505 3.35773C11.6766 3.42464 11.2319 3.62616 10.8692 3.93834C10.321 3.23716 9.54138 2.7538 8.66958 2.57467C7.79779 2.39554 6.89071 2.53232 6.11049 2.96055C5.33028 3.38878 4.72781 4.08054 4.41079 4.91217C4.09376 5.7438 4.08286 6.66107 4.38002 7.50001H4.16669C3.50365 7.50001 2.86776 7.7634 2.39892 8.23224C1.93008 8.70108 1.66669 9.33696 1.66669 10C1.66669 10.663 1.93008 11.2989 2.39892 11.7678C2.86776 12.2366 3.50365 12.5 4.16669 12.5H7.07835" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_16_7">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </span><span>3.MB</span>
                    </p>
                    <p>1.1.1</p>
                </div>
            </div>
        </div>

    </div>
</article>
<style lang="scss">

    .SectionOne{
        height: 100vh;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .sob{
            ul{
                list-style: none;
                display: flex;
                padding:0;
                justify-content: space-between;
                align-items: center;
                li{
                    p{
                        @include font(var(--tc), 1.4rem, 500);
                    }
                }
                li:nth-child(2){
                    background: var(--gn);
                    p{
                        border-radius: 6rem;
                        padding: 0.5rem 2rem ; 
                        color: white;
                        box-shadow: rgba(0, 0, 0, 0.205) 0 4px 4px 0;
                    }
                }
            }
            .details{
                padding: 5px 0 0 0;

                p{
                    @include font(var(--tc), 1.25rem, 500);
                    display: flex;
                    align-items: center;
                    span:nth-child(2){
                        margin: 0 10px;
                    }
                }
                p:nth-child(2){
                    color: var(--bl);
                    padding: 5px 0 0 0;
                }

            }
        }


    }
</style>