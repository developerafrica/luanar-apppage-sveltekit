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


    let campuslist = $downloadStores.data.filter((item)=>{
        console.log(item.campus)
        return item.campus == prog
    })

</script>
<article>
    <div class="art-download">
        {#each campuslist as cl}
        <button>
            <a href="/downloads/apk/{cl.programme}">{cl.programme}</a>
        </button>
        {/each}
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