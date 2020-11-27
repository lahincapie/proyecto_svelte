<script>
    import Comments from './Comments.svelte';
    import Modal from './Modal.svelte';
    import Share from './Share.svelte';
    import '../assets/css/Card.css';
    import CardUserImg from '../assets/images/lahc.jpg';
    import cat_one from '../assets/images/cat_one-min.jpg';
    import cat_two from '../assets/images/cat_two-min.jpg';
    import cat_three from '../assets/images/cat_three-min.jpg';
    import cat_four from '../assets/images/cat_four-min.jpg';
    import cat_five from '../assets/images/cat_five-min.jpg';

    import {blur} from 'svelte/transition';
    import {likeCount} from '../store/store.js'

    /* export let username;
    export let location;
    export let photo;
    export let postComment;
    export let comments;
    export let avatar; */

    let isModal = false;
    let like = false;
    let bookmark = false;

    function handleClick() {
        isModal = !isModal;
    }
    function handlelike() {
        like = !like;
        if(like){
            likeCount.update(n => n + 1)
        } else {
            likeCount.update(n => n - 1)
        }
    }

</script>

<!-- <div class="Card">
    {#if isModal}
        <div transition:blur>
            <Modal>
                <Share on:click={handleClick}/>
            </Modal>
        </div>
    {/if}
    <div class="Card-container">
        <div class="Card-Header">
            <div class="Card-user">
                <img src={avatar} alt="{username}">
                <h2>
                    {username}
                    <span>{location}</span>
                </h2>
            </div>
            <div class="Card-settings">
                <i class="fas fa-ellipsis-h" />
            </div>
        </div>
        <div class="Card-photo">
            <picture>
                <img src={photo} alt="{username}">
            </picture>
        </div>
        <div class="Card-icons">
            <div class="Card-icons-firts">
                <i class="fas fa-heart" />
                <i class="fas fa-paper-plane" />
            </div>
            <div class="Card-icons-second">
                <i class="fasfa-bookmark" />
            </div>
        </div>
        <div class="Card-description">
            <h3>{username}</h3>
            <span>{postComment}</span>
        </div>
        <Comments {comments}/>
    </div>
</div> -->
<div class="Card">
    {#if isModal}
        <div transition:blur>
            <Modal>
                <Share on:click={handleClick}/>
            </Modal>
        </div>
    {/if}

    <div class="Card-container">
        <div class="Card-Header">
            <div class="Card-user">
                <img src={CardUserImg} alt="">
                <h2>
                    Mauricio Cat
                    <span>Bogotá Colombia</span>
                </h2>
            </div>
            <div class="Card-settings">
                <i class="fas fa-ellipsis-h" />
            </div>
        </div>
        <div class="Card-photo">
            <picture on:dblclick={handlelike}>
                <img src={cat_one} alt="">
            </picture>
        </div>
        <div class="Card-icons">
            <div class="Card-icons-firts">
                <i class="fas fa-heart"
                    class:active-like={like}
                    on:click={handlelike}
                />
                <i class="fas fa-paper-plane" on:click={handleClick}/>
            </div>
            <div class="Card-icons-second">
                <i class="fas fa-bookmark"
                    class:active-bookmark={bookmark}
                    on:click={() => (bookmark =!bookmark)}
                />
            </div>
        </div>
        <div class="Card-description">
            <h3>lala</h3>
            <span>hola</span>
        </div>
        <Comments />
    </div>
</div>
<div class="Card">
    <div class="Card-container">
        <div class="Card-Header">
            <div class="Card-user">
                <img src={CardUserImg} alt="">
                <h2>
                    Mauricio Cat
                    <span>Bogotá Colombia</span>
                </h2>
            </div>
            <div class="Card-settings">
                <i class="fas fa-ellipsis-h" />
            </div>
        </div>
        <div class="Card-photo">
            <picture>
                <img src={cat_two} alt="">
            </picture>
        </div>
        <div class="Card-icons">
            <div class="Card-icons-firts">
                <i class="fas fa-heart" />
                <i class="fas fa-paper-plane" />
            </div>
            <div class="Card-icons-second">
                <i class="fasfa-bookmark" />
            </div>
        </div>
        <div class="Card-description">
            <h3>lala</h3>
            <span>hola</span>
        </div>
        <Comments />
    </div>
</div>
<div class="Card">
    <div class="Card-container">
        <div class="Card-Header">
            <div class="Card-user">
                <img src={CardUserImg} alt="">
                <h2>
                    Mauricio Cat
                    <span>Bogotá Colombia</span>
                </h2>
            </div>
            <div class="Card-settings">
                <i class="fas fa-ellipsis-h" />
            </div>
        </div>
        <div class="Card-photo">
            <picture>
                <img src={cat_three} alt="">
            </picture>
        </div>
        <div class="Card-icons">
            <div class="Card-icons-firts">
                <i class="fas fa-heart" />
                <i class="fas fa-paper-plane" />
            </div>
            <div class="Card-icons-second">
                <i class="fasfa-bookmark" />
            </div>
        </div>
        <div class="Card-description">
            <h3>lala</h3>
            <span>hola</span>
        </div>
        <Comments />
    </div>
</div>
<div class="Card">
    <div class="Card-container">
        <div class="Card-Header">
            <div class="Card-user">
                <img src={CardUserImg} alt="">
                <h2>
                    Mauricio Cat
                    <span>Bogotá Colombia</span>
                </h2>
            </div>
            <div class="Card-settings">
                <i class="fas fa-ellipsis-h" />
            </div>
        </div>
        <div class="Card-photo">
            <picture>
                <img src={cat_four} alt="">
            </picture>
        </div>
        <div class="Card-icons">
            <div class="Card-icons-firts">
                <i class="fas fa-heart" />
                <i class="fas fa-paper-plane" />
            </div>
            <div class="Card-icons-second">
                <i class="fasfa-bookmark" />
            </div>
        </div>
        <div class="Card-description">
            <h3>lala</h3>
            <span>hola</span>
        </div>
        <Comments />
    </div>
</div>
<div class="Card">
    <div class="Card-container">
        <div class="Card-Header">
            <div class="Card-user">
                <img src={CardUserImg} alt="">
                <h2>
                    Mauricio Cat
                    <span>Bogotá Colombia</span>
                </h2>
            </div>
            <div class="Card-settings">
                <i class="fas fa-ellipsis-h" />
            </div>
        </div>
        <div class="Card-photo">
            <picture>
                <img src={cat_five} alt="">
            </picture>
        </div>
        <div class="Card-icons">
            <div class="Card-icons-firts">
                <i class="fas fa-heart" />
                <i class="fas fa-paper-plane" />
            </div>
            <div class="Card-icons-second">
                <i class="fasfa-bookmark" />
            </div>
        </div>
        <div class="Card-description">
            <h3>lala</h3>
            <span>hola</span>
        </div>
        <Comments />
    </div>
</div>