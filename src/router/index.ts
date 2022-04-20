import {
	createRouter,
	createWebHistory,
	NavigationGuardNext,
	RouteLocationNormalized,
	RouteLocationNormalizedLoaded,
	RouteRecordRaw
} from 'vue-router'
import Layout from '@/layout/index.vue'
export const routesObj = [
	{
		path: '/:pathMatch(.*)',
		redirect: '/404',
		meta: { notLayout: true }
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/error.vue'),
		meta: { notLayout: true }
	},
	{
		path: '/',
		redirect: '/home',
		meta: { notLayout: true }
	},
	{
		path: '/home',
		component: () => import('@/views/home/index.vue'),
		meta: { title: '首页', icon: 'el-icon-house' }
	},
	// 在菜单展示按钮，仅重定向用，无需next()放行
	{
		path: '/new',
		component: () => import('@/views/index.vue'),
		meta: { title: '新标签', icon: 'el-icon-eleme' },
		beforeEnter: (
			to: RouteLocationNormalized,
			from: RouteLocationNormalizedLoaded,
			next: NavigationGuardNext
		) => {
			window.open(to.fullPath + '/index', '_blank')
			next(from.fullPath)
		}
	},
	// 新窗口路由
	{
		path: '/new/index',
		component: () => import('@/views/new-tab/index.vue'),
		meta: { notLayout: true, title: '新标签', icon: 'el-icon-house' }
	},
	{
		path: '/test',
		meta: { title: '测试', icon: 'el-icon-eleme' },
		component: () => import('@/views/index.vue'),
		children: [
			{
				path: 'shuffle',
				component: () => import('@/views/shuffle/index.vue'),
				meta: { title: '随机', icon: 'el-icon-eleme' }
			},
			{
				path: 'curry',
				component: () => import('@/views/curry-function/index.vue'),
				meta: { title: '柯里化', icon: 'el-icon-eleme' }
			},
			{
				path: 'bus',
				component: () => import('@/views/bus-demo/index.vue'),
				meta: { title: '公共串行BUS', icon: 'el-icon-eleme' }
			},
			{
				path: 'pinia',
				component: () => import('@/views/pinia-demo/index.vue'),
				meta: { title: 'Pinia', icon: 'el-icon-eleme' }
			}
		]
	},
	{
		path: '/components',
		meta: { title: '组件', icon: 'el-icon-eleme' },
		component: () => import('@/views/index.vue'),
		children: [
			{
				path: 'pagination',
				component: () => import('@/components/Pagination/demo.vue'),
				meta: { title: '分页', icon: 'el-icon-documentcopy' }
			}
		]
	}
]
const routes: Array<RouteRecordRaw> = []
const itemObj: RouteRecordRaw = {
	path: '',
	redirect: '/home',
	component: Layout,
	children: []
}
routesObj.forEach((item: RouteRecordRaw) => {
	if (!item.meta?.notLayout) {
		if (item.children) {
			item.redirect = item.path + '/' + item.children[0].path
		}
		itemObj.children!.push(item as RouteRecordRaw)
	} else {
		routes.push(item as RouteRecordRaw)
	}
})
routes.push(itemObj as RouteRecordRaw)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})
export default router
