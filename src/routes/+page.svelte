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

<!-- 본문 상단 프로필: 프로젝트와 같은 Entry 타이포그래피, 소개문 아래에 기술 스택 태그 -->
<Entry id="about" title="About">
    <p class="!mb-3">
        {profile.location}에서 일하는 {profile.tagline} <strong>{profile.name}</strong>입니다.
        PHP, WordPress, Laravel을 중심으로 웹 서비스를 만들고 운영합니다.
    </p>
    <ul aria-label="기술 스택" class="!mb-0 !ml-0 flex !list-none flex-wrap gap-1.5">
        {#each profile.skills as skill}
            <li class="rounded-sm bg-tt-line px-2 text-[12px] text-tt-text">{skill}</li>
        {/each}
    </ul>
</Entry>

<!-- 프로젝트 한 섹션 안에서 개인 / 회사(스튜디오 제이티) 영역만 나눔 -->
<Entry id="projects" title="Projects">
    <section aria-label="개인 프로젝트" id="personal">
        <ProjectList projects={personalProjects} />
    </section>

    <section aria-label="스튜디오 제이티 프로젝트" class="mt-10 border-t border-tt-line pt-10" id="studio-jt">
        <ProjectList projects={studioProjects} />
    </section>
</Entry>
