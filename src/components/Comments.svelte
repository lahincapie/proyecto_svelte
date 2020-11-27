<script>
    import '../assets/css/Comments.css';

    /* export let comments = [];

    function addComment(event){
        const msg = event.target.text.value;
        if (msg.length > 3){
            const message = {
                id: Date.now(),
                text: msg,
                username: 'A.H'
            }
            comments = [...comments, message];
            event.target.text.value = '';
        }
    } */
</script>

<!-- <div class="Comments">
    <div class="Comments-content">
        {#each comments as comment (comments.id)}
            <div class="Comments-users">
                <h3>{comment.usermane}</h3>
                <span>{comment.text}</span>
            </div>
        {/each}
        <div class="Comments-add">
            <form on:submit|preventDefault={addComment}>
                <input
                    type="text"
                    id="text"
                    placeholder="Agregar Comentario..."
                >
                <button type="submit">Post</button>
            </form>
        </div>
    </div>
</div> -->

<div class="Comments">
    <div class="Comments-content">
        <div class="Comments-users">
            <h3>Crispeta</h3>
            <span>Hola Lala</span>
        </div>
        <div class="Comments-add">
            <form action="">
                <input
                    type="text"
                    id="text"
                    placeholder="Agregar Comentario..."
                >
                <button type="submit">Post</button>
            </form>
        </div>
    </div>
</div>