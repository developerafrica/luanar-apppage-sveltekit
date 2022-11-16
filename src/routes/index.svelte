<script>
    import HEAD from "../components/head.svelte";
    import SECTIONFOUR from "../components/sectionfour.svelte";
    import SECTIONFIVE from "../components/sectionfive.svelte";

    import { stores } from "../stores/stores"
    import { browser } from "$app/env";

    $: cancel = false
    
    
</script>
<HEAD />
<section class="index-container">

    <div class="sects">
        <section class="section-one">
            <SECTIONFOUR />
        </section>
        <section class="section-two">
            <SECTIONFIVE storesData={$stores.data}/>
        </section>
    </div>
    <footer class:remove={cancel}>
        <div class="ft">
           <div class="popup">
            <div class="txt">
                <h1>DOWNLOAD LUANAR APP</h1>
            </div>
            <div class="down"><a href="/app">
                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_105_19)">
                    <rect width="45" height="45" rx="5" transform="matrix(1 0 0 -1 9 49)" fill="white"/>
                    <path d="M38.8813 29.6964V30.6964C38.8813 31.9245 38.1094 32.6964 36.8813 32.6964H26.8813C25.6533 32.6964 24.8813 31.9245 24.8813 30.6964V29.6964C24.8813 29.1526 24.4252 28.6964 23.8813 28.6964C23.3375 28.6964 22.8813 29.1526 22.8813 29.6964V30.6964C22.8813 32.9069 24.6708 34.6964 26.8813 34.6964H36.8813C39.0919 34.6964 40.8813 32.9069 40.8813 30.6964V29.6964C40.8813 29.1526 40.4252 28.6964 39.8813 28.6964C39.3375 28.6964 38.8813 29.1526 38.8813 29.6964ZM27.1796 26.3982L31.0743 30.2929C31.5129 30.749 32.2498 30.749 32.6884 30.2929L36.5831 26.3982C36.7761 26.2227 36.8813 25.9771 36.8813 25.6964C36.8813 25.1526 36.4252 24.6964 35.8813 24.6964C35.6006 24.6964 35.355 24.8017 35.1796 24.9947L31.2849 28.8894C31.0568 29.1175 32.7059 29.1175 32.4778 28.8894L28.5831 24.9947C28.4077 24.8017 28.162 24.6964 27.8813 24.6964C27.3375 24.6964 26.8813 25.1526 26.8813 25.6964C26.8813 25.9771 26.9866 26.2227 27.1796 26.3982ZM32.8813 29.6964V17.6964C32.8813 17.1526 32.4252 16.6964 31.8813 16.6964C31.3375 16.6964 30.8813 17.1526 30.8813 17.6964V29.6964C30.8813 30.2403 31.3375 30.6964 31.8813 30.6964C32.4252 30.6964 32.8813 30.2403 32.8813 29.6964Z" fill="#0991CD"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_105_19" x="0" y="0" width="54" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-5"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.568628 0 0 0 0 0.803922 0 0 0 0.26 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_19"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_19" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                    
            </a></div>
            <div class="cancel"><button on:click={()=>{cancel = true}}> 
                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_105_17)">
                    <rect width="45" height="45" rx="5" transform="matrix(1 0 0 -1 9 49)" fill="white"/>
                    <path d="M35.861 19.2161L31.042 24.2933L26.223 19.2161C25.8486 18.8217 25.2205 18.8217 24.8461 19.2161C24.4717 19.6106 24.4717 20.2723 24.8461 20.6668L31.042 27.1945L37.2378 20.6668C37.6122 20.2723 37.6122 19.6106 37.2378 19.2161C36.8634 18.8217 36.2354 18.8217 35.861 19.2161ZM26.223 32.2717L31.042 27.1945L35.861 32.2717C36.2354 32.6661 36.8634 32.6661 37.2378 32.2717C37.6122 31.8772 37.6122 31.2155 37.2378 30.821L31.042 24.2933L24.8461 30.821C24.4717 31.2155 24.4717 31.8772 24.8461 32.2717C25.2205 32.6661 25.8486 32.6661 26.223 32.2717Z" fill="#A70000"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_105_17" x="0" y="0" width="54" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-5"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.904167 0 0 0 0 0.109253 0 0 0 0 0.109253 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_17"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_17" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                    
                </button></div>
           </div>
        </div>
    </footer>
</section>
<style lang="scss">
    .index-container{
        max-width: 1200px;
        margin: auto;
        .sects{
            padding: 1rem;
        }
        footer{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            
            
            
            .ft{
                padding: 0.5rem;
                .popup{
                    border-radius: 5px;
                    background-image: url("/bg.png");
                    background-position: left;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-color: rgba(0, 0, 0, 0.723);
                    background-blend-mode: multiply;
                    padding: 0.09rem;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    svg{
                        width: 45px;
                    }
                    .txt{
                        h1{
                            @include font(white, 1.3rem, 700);
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 700px){
        .index-container{
            footer{                
                .ft{
                    margin-left: auto;
                    width: 350px;
                }
            }
        }
    }
</style>

