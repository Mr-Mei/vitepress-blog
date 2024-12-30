<script setup lang="ts">
import { NTimeline, NTimelineItem, NIcon, NBackTop, NTag } from 'naive-ui'
import { useRouter } from 'vitepress'
import dayjs from 'dayjs'
import { EmailOutlined, DiscountOutlined } from '@vicons/material'
// @ts-ignore
import { data as posts } from '../utils/posts.data'

const router = useRouter()

const timelineList = posts
  .filter((item: Record<string, any>) => !item.url.includes('/知识库/'))
  .map((item: Record<string, any>) => ({
    ...item,
    unixDate: dayjs(item.frontmatter.date).unix(),
  }))
  .sort((a: Record<string, any>, b: Record<string, any>) => b.unixDate - a.unixDate)
  .map((item: Record<string, any>) => {
    const { unixDate, ...rest } = item
    return rest
  })

const jump = (path: string) => {
  router.go('vitepress-blog' + path)
}
</script>

<template>
  <div class="artical-list">
    <section class="left-wrapper">
      <img class="avatar" src="/assets/avatar.jpg" alt="avatar" />
      <p class="name">文艺小书生</p>
      <p class="text">时光清浅，岁月安然</p>
      <div class="email">
        <NIcon :size="23">
          <EmailOutlined />
        </NIcon>
        7531336@qq.com
      </div>
    </section>
    <section class="right-wrapper">
      <n-timeline size="large">
        <n-timeline-item v-for="item in timelineList">
          <template #icon>
            <div class="icon">
              <p>{{ dayjs(item.frontmatter.date).format('YYYY-MM-DD') }}</p>
              <div class="dot"></div>
            </div>
          </template>
          <template #default>
            <div class="card" @click="jump(item.url)">
              <div class="title">{{ item.frontmatter.title }}</div>
              <div class="tags">
                <n-tag :bordered="false" type="info" v-for="tagItem in item.frontmatter.tags">
                  {{ tagItem }}
                  <template #icon>
                    <n-icon :size="16" :component="DiscountOutlined" />
                  </template>
                </n-tag>
              </div>
              <div class="info">{{ item.frontmatter.info ?? '无简介' }}</div>
              <div class="date">
                {{ dayjs(item.frontmatter.date).format('YYYY-MM-DD') }}
              </div>
            </div>
          </template>
        </n-timeline-item>
      </n-timeline>
    </section>
    <n-back-top :right="10" />
  </div>
</template>

<style scoped lang="scss">
.artical-list {
  width: 100%;
  height: 100%;
  color: var(--black-color-1);
  display: flex;
  font-family: 'Roboto', sans-serif;

  .left-wrapper {
    position: sticky;
    top: 92px;
    margin-top: 3vh;
    border: 1px solid var(--border-color-1);
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var(--border-radius);
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    p {
      margin: 0;
    }

    .avatar {
      width: 100px;
      border-radius: 100%;
      user-select: none;
      cursor: auto;
      margin: 40px 0 0 0;
    }
    .avatar:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 0, 255, 0.5);
    }

    .name {
      font-family: 'Brush Script', 'Cursive', 'Lucida Handwriting', cursive; /* 使用内建的手写字体 */
      font-size: 26px;
      font-weight: 400; /* 适中的字体粗细 */
      margin: 10px 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* 增加阴影，提升签名感 */
      letter-spacing: 1px; /* 稍微增加字母间距 */
      font-style: italic; /* 斜体效果，增加签名感 */
    }

    .text {
      font-size: 14px;
      color: var(--grey-color-1);
      user-select: none;
    }

    .email {
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-top: 10px;
    }
  }

  .right-wrapper {
    margin-left: 150px;
    margin-top: 3vh;
    width: calc(100% - 250px - 150px);
    min-width: 300px;

    :deep(.n-timeline-item-timeline__line) {
      background-color: var(--grey-color-2);
    }

    .card {
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }

      .info,
      .date {
        font-size: 14px;
        color: var(--grey-color-1);
        margin-top: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .date {
        display: none;
      }
    }

    .icon {
      width: 6px;
      height: 6px;
      position: relative;

      p {
        position: absolute;
        margin: 0;
        width: 130px;
        left: -140px;
        top: -2px;
        font-size: 12px;
        line-height: 12px;
        height: 12px;
        text-align: right;
      }

      .dot {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: var(--blue-color-1);
      }
    }

    .card {
      width: 100%;
      min-height: 120px;
      color: var(--black-color-1);
      border: 1px solid var(--border-color-1);
      border-radius: var(--border-radius);
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.5px;
        margin-bottom: 10px;
        cursor: pointer;
      }

      .tags {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .n-tag {
          margin-right: 10px;
        }
      }

      .info,
      .date {
        font-size: 14px;
        color: var(--grey-color-1);
        margin-top: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .date {
        display: none;
      }
    }
  }
}

@media (max-width: 730px) {
  .artical-list {
    flex-direction: column;

    .left-wrapper {
      min-width: 300px;
      width: 100%;
      position: static;
    }

    .right-wrapper {
      margin-left: 0;
      width: 100%;

      .icon {
        p {
          display: none;
        }
      }
    }

    .card {
      .date {
        display: block !important;
      }

      .info {
        display: none !important;
      }
    }
  }
}
</style>
