<script>
    import {browser} from "$app/env"
    import {config_stores} from "../../stores/config_stores"

    const key = "darkkey-MWS-V.1.1.1-BUTAO"
    $: dark = false 
    dark = $config_stores.dark
    function darkToggle(){
        dark = !dark
        if (browser){
            localStorage.setItem(key, JSON.stringify(dark))
            $config_stores.dark = dark
            
        }        
    }
 
</script>

<article class="config-page">
    <div class="cfg-page">
        
        <main>
            <div class="mn">
               
                <a href="/home" class="home config-list">
                    <header>
                        <div class="hd">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.98996 22.75C9.78996 22.75 9.62996 22.71 9.50996 22.66C9.10996 22.51 8.42996 22.02 8.42996 20.47V14.02H6.08996C4.74996 14.02 4.26996 13.39 4.09996 13.02C3.92996 12.64 3.77996 11.87 4.65996 10.86L12.23 2.26001C13.25 1.10001 14.08 1.18001 14.48 1.33001C14.88 1.48001 15.56 1.97001 15.56 3.52001V9.97001H17.9C19.24 9.97001 19.72 10.6 19.89 10.97C20.06 11.35 20.21 12.12 19.33 13.13L11.76 21.73C11.05 22.54 10.43 22.75 9.98996 22.75ZM13.93 2.74001C13.9 2.78001 13.69 2.88001 13.36 3.26001L5.78996 11.86C5.50996 12.18 5.46996 12.38 5.46996 12.42C5.48996 12.43 5.66996 12.53 6.08996 12.53H9.17996C9.58996 12.53 9.92996 12.87 9.92996 13.28V20.48C9.92996 20.98 10.02 21.2 10.06 21.26C10.09 21.22 10.3 21.12 10.63 20.74L18.2 12.14C18.48 11.82 18.52 11.62 18.52 11.58C18.5 11.57 18.32 11.47 17.9 11.47H14.81C14.4 11.47 14.06 11.13 14.06 10.72V3.52001C14.07 3.02001 13.97 2.81001 13.93 2.74001Z" fill="black" fill-opacity="0.87"/>
                                </svg>     
                            </span><span>
                                <h1>HOME</h1>
                               
                            </span>
                        </div>
                        <hr>
                    </header>
                    <main>
                        <div class="mn">
                            <p>&hArr;</p>
                        </div>

                    </main>
                </a>
                <a href="/ads" class="ads config-list">
                    <header>
                        <div class="hd">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.98996 22.75C9.78996 22.75 9.62996 22.71 9.50996 22.66C9.10996 22.51 8.42996 22.02 8.42996 20.47V14.02H6.08996C4.74996 14.02 4.26996 13.39 4.09996 13.02C3.92996 12.64 3.77996 11.87 4.65996 10.86L12.23 2.26001C13.25 1.10001 14.08 1.18001 14.48 1.33001C14.88 1.48001 15.56 1.97001 15.56 3.52001V9.97001H17.9C19.24 9.97001 19.72 10.6 19.89 10.97C20.06 11.35 20.21 12.12 19.33 13.13L11.76 21.73C11.05 22.54 10.43 22.75 9.98996 22.75ZM13.93 2.74001C13.9 2.78001 13.69 2.88001 13.36 3.26001L5.78996 11.86C5.50996 12.18 5.46996 12.38 5.46996 12.42C5.48996 12.43 5.66996 12.53 6.08996 12.53H9.17996C9.58996 12.53 9.92996 12.87 9.92996 13.28V20.48C9.92996 20.98 10.02 21.2 10.06 21.26C10.09 21.22 10.3 21.12 10.63 20.74L18.2 12.14C18.48 11.82 18.52 11.62 18.52 11.58C18.5 11.57 18.32 11.47 17.9 11.47H14.81C14.4 11.47 14.06 11.13 14.06 10.72V3.52001C14.07 3.02001 13.97 2.81001 13.93 2.74001Z" fill="black" fill-opacity="0.87"/>
                                    </svg>
                                    
                                    
                                    
                            </span><span>
                                <h1>ADVERTISMENT</h1>
                               
                            </span>
                        </div>
                        <hr>
                    </header>
                    <main>
                        <div class="mn">
                            <p>&hArr;</p>
                        </div>

                    </main>
                </a>
                <a href="/" class="download config-list">
                    <header>
                        <div class="hd">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.98996 22.75C9.78996 22.75 9.62996 22.71 9.50996 22.66C9.10996 22.51 8.42996 22.02 8.42996 20.47V14.02H6.08996C4.74996 14.02 4.26996 13.39 4.09996 13.02C3.92996 12.64 3.77996 11.87 4.65996 10.86L12.23 2.26001C13.25 1.10001 14.08 1.18001 14.48 1.33001C14.88 1.48001 15.56 1.97001 15.56 3.52001V9.97001H17.9C19.24 9.97001 19.72 10.6 19.89 10.97C20.06 11.35 20.21 12.12 19.33 13.13L11.76 21.73C11.05 22.54 10.43 22.75 9.98996 22.75ZM13.93 2.74001C13.9 2.78001 13.69 2.88001 13.36 3.26001L5.78996 11.86C5.50996 12.18 5.46996 12.38 5.46996 12.42C5.48996 12.43 5.66996 12.53 6.08996 12.53H9.17996C9.58996 12.53 9.92996 12.87 9.92996 13.28V20.48C9.92996 20.98 10.02 21.2 10.06 21.26C10.09 21.22 10.3 21.12 10.63 20.74L18.2 12.14C18.48 11.82 18.52 11.62 18.52 11.58C18.5 11.57 18.32 11.47 17.9 11.47H14.81C14.4 11.47 14.06 11.13 14.06 10.72V3.52001C14.07 3.02001 13.97 2.81001 13.93 2.74001Z" fill="black" fill-opacity="0.87"/>
                                    </svg>
                                    
                                    
                                    
                            </span><span>
                                <h1>DOWNLOAD</h1>
                               
                            </span>
                        </div>
                        <hr>
                    </header>
                    <main>
                        <div class="mn">
                            <p>&hArr;</p>
                        </div>

                    </main>
                </a>
                <a href="/updates" class="faq config-list">
                    <header>
                        <div class="hd">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.98996 22.75C9.78996 22.75 9.62996 22.71 9.50996 22.66C9.10996 22.51 8.42996 22.02 8.42996 20.47V14.02H6.08996C4.74996 14.02 4.26996 13.39 4.09996 13.02C3.92996 12.64 3.77996 11.87 4.65996 10.86L12.23 2.26001C13.25 1.10001 14.08 1.18001 14.48 1.33001C14.88 1.48001 15.56 1.97001 15.56 3.52001V9.97001H17.9C19.24 9.97001 19.72 10.6 19.89 10.97C20.06 11.35 20.21 12.12 19.33 13.13L11.76 21.73C11.05 22.54 10.43 22.75 9.98996 22.75ZM13.93 2.74001C13.9 2.78001 13.69 2.88001 13.36 3.26001L5.78996 11.86C5.50996 12.18 5.46996 12.38 5.46996 12.42C5.48996 12.43 5.66996 12.53 6.08996 12.53H9.17996C9.58996 12.53 9.92996 12.87 9.92996 13.28V20.48C9.92996 20.98 10.02 21.2 10.06 21.26C10.09 21.22 10.3 21.12 10.63 20.74L18.2 12.14C18.48 11.82 18.52 11.62 18.52 11.58C18.5 11.57 18.32 11.47 17.9 11.47H14.81C14.4 11.47 14.06 11.13 14.06 10.72V3.52001C14.07 3.02001 13.97 2.81001 13.93 2.74001Z" fill="black" fill-opacity="0.87"/>
                                    </svg>
                                    
                                    
                                    
                            </span><span>
                                <h1>UPDATES</h1>
                               
                            </span>
                        </div>
                        <hr>
                    </header>
                    <main>
                        <div class="mn">
                            <p>&hArr;</p>
                        </div>

                    </main>
                </a>

                <a href="tel://0880164455" class="supportus config-list">
                    <header>
                        <div class="hd">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.28 22.1H12.48C11.92 22.1 10.7 21.93 10.05 21.28L7.01999 18.94L7.93999 17.75L11.04 20.15C11.29 20.39 11.92 20.59 12.48 20.59H16.28C17.18 20.59 18.15 19.87 18.35 19.06L20.77 11.71C20.93 11.27 20.9 10.87 20.69 10.58C20.47 10.27 20.07 10.09 19.58 10.09H15.58C15.06 10.09 14.58 9.86999 14.25 9.48999C13.91 9.09999 13.76 8.57999 13.84 8.03999L14.34 4.82999C14.46 4.26999 14.08 3.63999 13.54 3.45999C13.05 3.27999 12.42 3.53999 12.2 3.85999L8.09999 9.95999L6.85999 9.12999L10.96 3.02999C11.59 2.08999 12.97 1.63999 14.05 2.04999C15.3 2.45999 16.1 3.83999 15.82 5.11999L15.33 8.26999C15.32 8.33999 15.32 8.43999 15.39 8.51999C15.44 8.56999 15.51 8.59999 15.59 8.59999H19.59C20.57 8.59999 21.42 9.00999 21.92 9.71999C22.41 10.41 22.51 11.32 22.19 12.2L19.8 19.48C19.43 20.93 17.89 22.1 16.28 22.1Z" fill="black" fill-opacity="0.87"/>
                                    <path d="M5.38 21H4.38C2.53 21 1.63 20.13 1.63 18.35V8.55002C1.63 6.77002 2.53 5.90002 4.38 5.90002H5.38C7.23 5.90002 8.13 6.77002 8.13 8.55002V18.35C8.13 20.13 7.23 21 5.38 21ZM4.38 7.40002C3.29 7.40002 3.13001 7.66002 3.13001 8.55002V18.35C3.13001 19.24 3.29 19.5 4.38 19.5H5.38C6.47001 19.5 6.63 19.24 6.63 18.35V8.55002C6.63 7.66002 6.47001 7.40002 5.38 7.40002H4.38Z" fill="black" fill-opacity="0.87"/>
                                    </svg>
                                    
                                    
                                    
                            </span><span>
                                <h1>contact us</h1>
                            </span>
                        </div>
                        <hr>
                    </header>
                    <main>
                        <div class="mn">
                            <p>&hArr;</p>
                        </div>

                    </main>
                </a>
            </div>
        </main>

    </div>
</article>
<style lang="scss">
    .config-page{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--bg);
        min-height: 100vh;
        
    }
</style>