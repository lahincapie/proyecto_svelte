<script>
    import {onMount} from 'svelte';
    import Header from '../components/Header.svelte';
    import Main from '../components/Main.svelte';
    import TimeLine from '../components/TimeLine.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import '../assets/css/App.css';

    let data = {};
    const API = 'https://us-central1-pugstagram-co.cloudfunctions.net/data';

    onMount(async () => {
        const response = await fetch(API);
        data = await response.json();
    });

</script>

<!-- <Header />
<Main>
    <TimeLine posts={data.posts}/>
    <Sidebar {..App.data.user}/>
</Main> -->
<Header />
<Main>
    <TimeLine/>
    <Sidebar />
</Main>
