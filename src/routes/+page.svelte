<script>
    import Entry from "../components/Entry.svelte";
    import ProjectList from "../components/ProjectList.svelte";
    import { personalProjects, profile, studioProjects } from "$lib/profile";

    const description =
        "부산의 웹 백엔드 개발자 이영일입니다. 개인 프로젝트와 스튜디오 제이티에서 참여한 프로젝트를 소개합니다.";
</script>

<svelte:head>
    <title>{profile.handle} · {profile.tagline} {profile.name}</title>
    <meta content={description} name="description" />
    <meta content="{profile.handle} · {profile.tagline} {profile.name}" property="og:title" />
    <meta content={description} property="og:description" />
    <meta content="website" property="og:type" />
</svelte:head>

<h1 class="sr-only">{profile.handle} 프로젝트</h1>

<Entry id="personal" title="개인 프로젝트">
    <ProjectList projects={personalProjects} />

    <svelte:fragment slot="meta">
        개인 프로젝트 {personalProjects.length}건 · 카드를 누르면 GitHub 저장소가 새 창으로 열립니다.
    </svelte:fragment>
</Entry>

<Entry id="studio-jt" title="스튜디오 제이티 프로젝트">
    <ProjectList projects={studioProjects} />
</Entry>
