<article class="SectionTwo">
<div class="bgSpots">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
<div class="artSectTwo">
    <div class="txt">
    <article>
        <h1>LUANAR APP</h1>
        <p>STUDENT PRODUCTIVITY APP</p>
        <p>free | fast | simple</p>
    </article>
    </div>
    <div class="img">
    <img src="/phone2.png" alt="phone design" width={104} height={494}/>
    </div>
</div>
</article>
<style lang="scss">
    
    .SectionTwo{
    width: 100%;
    position: relative;
    border-right: green solid 1px;
    .artSectTwo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .txt{
            flex:1;
            display: grid;
            place-content: center;
            article{
                h1{
                    @include font(var(--tc), 1.6rem, 700);
                    letter-spacing: 1.3px;
                }
                p{
                    @include font(var(--tc), 1.3rem, 500);
                }
            }
        }
    }
    /* Group 353 */
    .bgSpots{
    
        position: absolute;
        width: 315px;
        height: 446px;
        left: 8px;
        top: 28px;
        div:nth-child(1){
    
            /* Rectangle 28 */
            
            position: absolute;
            width: 100px;
            height: 100px;
            left: 223px;
            top: 355px;
            
            background: #ADE0B0;
            border-radius: 100px;
        }
        div:nth-child(2){
            /* Rectangle 25 */
            
            position: absolute;
            width: 60px;
            height: 60px;
            left: 8px;
            top: 414px;
            
            background: #ADE0B0;
            border-radius: 100px;
    
        }
        div:nth-child(3){
            /* Rectangle 26 */
            
            position: absolute;
            width: 120px;
            height: 120px;
            left: 81px;
            top: 200px;
            
            background: rgba(173, 224, 176, 0.3);
            border-radius: 100px;
    
        }
        div:nth-child(4){
    
            /* Rectangle 27 */
            
            position: absolute;
            width: 20px;
            height: 20px;
            left: 18px;
            top: 28px;
            
            background: #ADE0B0;
            border-radius: 100px;
        }
    }
}
</style>