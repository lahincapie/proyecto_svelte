<script>
    import '../assets/css/Header.css'
    import {likeCount} from '../store/store.js'
</script>

<div class="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <h1>Catstagram</h1>
            </div>
            <div class="Header-nav">
                <ul>
                    <li>
                        <i class="fas fa-heart" />
                        {$likeCount === 0 ? '' : $likeCount}
                    </li>
                    <li>
                        <i class="fas fa-user-alt" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>