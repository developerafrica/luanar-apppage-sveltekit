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
                        <p>STABLE RELEASE</p>
                    </li>
                    <li>
                        <p>APK VERSION 1.1.1</p>

                    </li>
                </ul>
                
                <div class="details">
                   
                    <p>1 NOV 2022</p>
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
                        color: white;
                        border-radius: 6rem;
                        padding: 0.5rem 2rem ; 

                    }
                }
            }
            .details{
                padding: 5px 0 0 0;

                p{
                    @include font(var(--tc), 1.25rem, 500);
                    display: flex;
                    align-items: center;
                   
                }
                p{
                    color: var(--bl);
                    padding: 5px 0 0 0;
                }

            }
        }


    }
</style>