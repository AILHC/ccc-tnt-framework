
interface ISceneConfig {
    scene: string;
    button: string;
    bundle: string;
}

export const SceneConfig: ISceneConfig[] = [
    {
        scene: "BaseDemo",
        button: "基础接口",
        bundle: "test-example"
    },
    {
        scene: "DragDropScene",
        button: "拖放",
        bundle: "drag-drop-example",
    },
    {
        scene: "WindowScene",
        button: "弹窗",
        bundle: "window-example"
    },
    {
        scene: "CaptureScene",
        button: "截屏",
        bundle: "capture-example"
    },
    {
        scene: "MVVMDemoList",
        button: "MVVM",
        bundle: "mvvm-example"
    },
    {
        scene: "TiledMapOrientationDemo",
        button: "TiledMap",
        bundle: "tiled-map-example"
    },
    {
        scene: "LongPressDemo",
        button: "长按",
        bundle: "test-example"
    }
]