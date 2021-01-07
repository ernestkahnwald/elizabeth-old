<template>
  <div class="add-operation">
    <Header>
      <template v-slot:title>Добавить операцию</template>
      <template v-slot:actions>
        <div class="el-icon-close" @click="onClose"></div>
      </template>
    </Header>

    <div class="add-operation__fields container">
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="Сумма">
          <el-input-number
            v-model="form.sum"
            controls-position="right"
            :min="0"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Категория">
          <el-cascader
            :options="categories"
            :props="{ checkStrictly: true }"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="Заметка">
          <el-input
            v-model="form.note"
            type="textarea"
            placeholder="Введите заметку"
          ></el-input>
        </el-form-item>
        <el-form-item label="Дата и время">
          <el-date-picker
            v-model="form.datetime"
            type="datetime"
            placeholder="Выберите дату и время"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </div>

    <div class="add-operation__buttons container">
      <el-button type="primary" @click="onSave">Сохранить</el-button>
    </div>
  </div>
</template>

<script>
import Header from '~/components/sections/Header'

export default {
  components: {
    Header,
  },

  props: {},

  data() {
    return {
      form: {
        sum: 0,
      },
      categories: [
        {
          value: 'val1',
          label: 'lab1',
          children: [
            {
              value: 'ival',
              label: 'ilab',
            },
          ],
        },
      ],
    }
  },

  methods: {
    onSave() {
      this.$emit('save', 1)
      this.close()
    },

    onClose() {
      this.close()
    },

    close() {
      this.$modal.hide('addOperation')
    },
  },
}
</script>

<style lang="scss">
.add-operation {
  background-color: $color-bg-common;

  &__fields {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  &__buttons {
    margin-top: 20px;
  }
}
</style>
