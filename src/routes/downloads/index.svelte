

<article>
    <div class="art-download">
        <button>
            <a href="/downloads/programme/city">CITY CAMPUS</a>
        </button>
        <button>
            <a href="/downloads/programme/bunda">BUNDA CAMPUS</a>
        </button>
    </div>
</article>

<style lang="scss">
    article{
        height: 100vh;
        display: grid;
        place-items: center;
        .art-download{
            padding: 1rem;
            display: flex;
            flex-direction: column;

            button{
                background: none;
                border: var(--gn) 1px solid;
                text-align: center;
                padding: 1rem 2rem;
                border-radius: 4px;
                margin: 2rem;
                a{
                    @include font(var(--tc), 1.5rem, 550)
                }
                
            }
            
        }
    }
</style>