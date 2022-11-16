<script>
        import { stores } from "../stores/stores"
        import CARDS from "../components/sectionfive.svelte" 
        const storesData = $stores.data;
        
</script>
<div class="ads">

    <CARDS storesData={$stores.data}/>
</div>
<style>
    .ads{
        padding: 10vh 0;
    }
</style>