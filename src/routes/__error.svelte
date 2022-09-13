<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
      return {
        props: {
          ERROR : {
            status,
            error
        }
        }
      };
    }
  </script>
  
  <script>
    export let ERROR;
  </script>


<article class="error">
  <div class="err-sect">
    <div class="error-text">
      <div class="err-txt">
        <h1>
          {ERROR.status}
        </h1>
      </div>
    </div>
    <div class="error-svg">
      <div class="ers">
          
      </div>
    </div>      
  </div>
</article>
<style lang="scss">
  .error{
    position: relative;
    height: 100vh;
    .err-sect{
      padding: 1rem;
      .error-text{
        .err-txt{
          h1{
            @include font(var(--tc), 2rem, 600)
          }
        }

      }
    
      
    }

  }
</style>