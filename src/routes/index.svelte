<script>
    import HEAD from "../components/head.svelte";
    import SECTIONONE from "../components/sectionone.svelte";
    import SECTIONTWO from "../components/sectiontwo.svelte";
    import SECTIONTHREE from "../components/sectionthree.svelte";

    import { stores } from "../stores/stores"
    import { browser } from "$app/env";
    
    
</script>
<HEAD />
<section class="index-container">

    <div class="sects">
        <section class="section-one">
            <SECTIONONE />
        </section>
        <section class="section-two">
            <SECTIONTWO storesData={$stores.data}/>
        </section>
        <section class="section-three">
            <SECTIONTHREE />
        </section>
    </div>
    <footer>
        <div class="ft">
          <button>
          <a href="/downloads/">OFFICIAL DOWNLOAD </a>
          </button>
         
          <div class="gnline"></div>
        </div>
      </footer>
   
</section>
<style lang="scss">
    .index-container{
        .sects{
            padding: 1rem;
        }
        footer{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            .ft{
                padding: 1rem;
                display: grid;
                place-items: center;
                button{
                    background: var(--l-gn);
                    padding: 1.1rem 2rem;
                    a{
                        @include font(var(--tc), 1.4rem, 600);
                    }
                    border:none;
                    border-radius: 4px;
                }
                .gnline{
                    background: var(--gn);
                    height: 2px;
                    width: 150px;
                    margin: 2rem 0 0 0;
                }
            }
        }
    }
</style>

