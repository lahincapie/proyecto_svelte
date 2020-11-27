<script>
    import Card from './Card.svelte'
    import '../assets/css/TimeLine.css'
import App from '../containers/App.svelte'

    /* export let posts = []; */

</script>

<div class="TimeLine">
    <div class="TimeLine-container">
        <Card />
    </div>
</div>
<!-- <div class="TimeLine">
    <div class="TimeLine-container">
        {#each posts as post}
            <Card {...post}/>
        {:else}
            <p>Loading</p>
        {/each}
    </div>
</div> -->