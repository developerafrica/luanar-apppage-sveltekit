<script context="module" >
    export const load = ({params}) =>{
        let res = params.slug
        return{
            props: res
        }
    }
</script>

<script>
    export let res
</script>

<article>{res}</article>