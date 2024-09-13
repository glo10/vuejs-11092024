<script setup>
import HelloWorld from './components/HelloWorld.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import BaseLayout from '@/components/BaseLayout.vue'
</script>

<template>
<BaseLayout>
  <template #header>
    <IconFacebook/>
  </template>
  <template #content>
    <WelcomeItem>
      <template #heading>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </template>
    </WelcomeItem>
    <WelcomeItem>
      <template #heading>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Item 1</td>
            <td>Details 1</td>
          </tr>
          <tr>
            <td>Item 2</td>
            <td>Details 2</td>
          </tr>
          </tbody>
        </table>
      </template>
    </WelcomeItem>
  </template>
</BaseLayout>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
