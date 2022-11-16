<script context="module">
    export const load = ({params}) =>{
        let prog = params.slug
        return {
            props : {prog}
        }
    }
</script>
<script>
    export let prog;
    import {downloadStores} from "../../../stores/download";


    let applist = $downloadStores.data.filter((item)=>{
       
        return item.programme == prog
    })

</script>
{#each applist as apl}
<article>
    <div class="art-download">
        <h1>{apl.programme}</h1>
        <button>
            <a href={apl.app} download="LUANAR">{apl.programme} download</a>
        </button>
        <main>
            <div class="mn">
                <ul>
                    <li>
                        <h1>last modified</h1>
                        <p>{apl.datemodified}</p>
                    </li>
                    <li>
                        <h1>added modifications</h1>
                        <p>{apl.changes}</p>
                    </li>
                </ul>
            </div>
        </main>
        
    </div>
</article>
{/each}

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
                box-shadow: rgba(0, 0, 0, 0.204) -2px -4px 4px 0, var(--l-gn) 2px 4px 4px 0;
                background: var(--l-gn);
                text-align: center;
                padding: 1rem 2rem;
                border-radius: 4px;
                margin: 10rem 0;
                a{
                    text-transform: capitalize;
                    @include font(var(--tc), 1.5rem, 550)
                }
                
            }
            
        }
    }
</style>