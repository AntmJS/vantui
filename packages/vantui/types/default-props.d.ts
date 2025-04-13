import {
  ActionSheetProps,
  AreaProps,
  BadgeProps,
  ButtonProps,
  CalendarProps,
  CardProps,
  CascaderProps,
  CellProps,
  CellGroupProps,
  CheckListProps,
  CheckboxGroupProps,
  CheckboxProps,
  CircleProps,
  ColProps,
  CollapseProps,
  CollapseItemProps,
  CountDownProps,
  CountUpProps,
  DatetimePickerProps,
  DialogProps,
  DividerProps,
  DropdownItemProps,
  DropdownMenuProps,
  EllipsisProps,
  EmptyProps,
  FieldProps,
  FormItemProps,
  FormProps,
  IMakeFormRenderProps,
  GoodsActionButtonProps,
  GoodsActionIconProps,
  GoodsActionProps,
  GridItemProps,
  IconProps,
  ImageProps,
  ImageViewerProps,
  ImageCropperProps,
  IndexAnchorProps,
  IndexBarProps,
  InfiniteScrollProps,
  LoadingProps,
  NavBarProps,
  NoticeBarProps,
  NotifyProps,
  NumberKeyboardProps,
  OverlayProps,
  PaginationProps,
  PickerProps,
  PopupProps,
  ProgressProps,
  IPullToRefreshProps,
  RadioGroupProps,
  RadioProps,
  RateProps,
  IResultProps,
  RowProps,
  SearchProps,
  ShareSheetProps,
  SidebarItemProps,
  SidebarProps,
  ISignatureProps,
  SkeletonProps,
  SkuProps,
  SliderProps,
  SpaceProps,
  StepperProps,
  StickyProps,
  SubmitBarProps,
  SwipeCellProps,
  SwiperProps,
  SwiperItemProps,
  SwitchProps,
  TabProps,
  TabbarItemProps,
  TabsProps,
  ITableProps,
  TagProps,
  ToastProps,
  TreeSelectProps,
  UploaderProps,
  IVirtualListProps,
  WaterMarkProps,
  WaterfallFlowProps,
  GridProps,
  StepsProps,
  TabbarProps,
} from './index'

export type IDefaultProps = {
  ActionSheet?: Partial<ActionSheetProps>
  Area?: Partial<AreaProps>
  Badge?: Partial<BadgeProps>
  Button?: Partial<ButtonProps>
  Calendar?: Partial<CalendarProps>
  Card?: Partial<CardProps>
  Cascader?: Partial<CascaderProps>
  Cell?: Partial<CellProps>
  CellGroup?: Partial<CellGroupProps>
  CheckList?: Partial<CheckListProps>
  CheckboxGroup?: Partial<CheckboxGroupProps>
  Checkbox?: Partial<CheckboxProps>
  Circle?: Partial<CircleProps>
  Col?: Partial<ColProps>
  Collapse?: Partial<CollapseProps>
  CollapseItem?: Partial<CollapseItemProps>
  CountDown?: Partial<CountDownProps>
  CountUp?: Partial<CountUpProps>
  DatetimePicker?: Partial<DatetimePickerProps>
  Dialog?: Partial<DialogProps>
  Divider?: Partial<DividerProps>
  DropdownItem?: Partial<DropdownItemProps>
  DropdownMenu?: Partial<DropdownMenuProps>
  Ellipsis?: Partial<EllipsisProps>
  Empty?: Partial<EmptyProps>
  Field?: Partial<FieldProps>
  FormItem?: Partial<FormItemProps>
  Form?: Partial<FormProps>
  FormRender?: Partial<IMakeFormRenderProps<any, any>>
  GoodsActionButton?: Partial<GoodsActionButtonProps>
  GoodsActionIcon?: Partial<GoodsActionIconProps>
  GoodsAction?: Partial<GoodsActionProps>
  GridItem?: Partial<GridItemProps>
  Grid?: Partial<GridProps>
  Icon?: Partial<IconProps>
  Image?: Partial<ImageProps>
  ImageViewer?: Partial<ImageViewerProps>
  ImageCropper?: Partial<ImageCropperProps>
  IndexAnchor?: Partial<IndexAnchorProps>
  IndexBar?: Partial<IndexBarProps>
  InfiniteScroll?: Partial<InfiniteScrollProps>
  Loading?: Partial<LoadingProps>
  NavBar?: Partial<NavBarProps>
  NoticeBar?: Partial<NoticeBarProps>
  Notify?: Partial<NotifyProps>
  NumberKeyboard?: Partial<NumberKeyboardProps>
  Overlay?: Partial<OverlayProps>
  Pagination?: Partial<PaginationProps>
  Picker?: Partial<PickerProps>
  Popup?: Partial<PopupProps>
  Progress?: Partial<ProgressProps>
  PullToRefresh?: Partial<IPullToRefreshProps>
  RadioGroup?: Partial<RadioGroupProps>
  Radio?: Partial<RadioProps>
  Rate?: Partial<RateProps>
  Result?: Partial<IResultProps>
  Row?: Partial<RowProps>
  Search?: Partial<SearchProps>
  ShareSheet?: Partial<ShareSheetProps>
  SidebarItem?: Partial<SidebarItemProps>
  Sidebar?: Partial<SidebarProps>
  Signature?: Partial<ISignatureProps>
  Skeleton?: Partial<SkeletonProps>
  Sku?: Partial<SkuProps>
  Slider?: Partial<SliderProps>
  Space?: Partial<SpaceProps>
  Stepper?: Partial<StepperProps>
  Steps?: Partial<StepsProps>
  Sticky?: Partial<StickyProps>
  SubmitBar?: Partial<SubmitBarProps>
  SwipeCell?: Partial<SwipeCellProps>
  Swiper?: Partial<SwiperProps>
  SwiperItem?: Partial<SwiperItemProps>
  Switch?: Partial<SwitchProps>
  Tab?: Partial<TabProps>
  TabbarItem?: Partial<TabbarItemProps>
  Tabbar?: Partial<TabbarProps>
  Tabs?: Partial<TabsProps>
  Table?: Partial<ITableProps>
  Tag?: Partial<TagProps>
  Toast?: Partial<ToastProps>
  TreeSelect?: Partial<TreeSelectProps>
  Uploader?: Partial<UploaderProps>
  VirtualList?: Partial<IVirtualListProps<any>>
  WaterMark?: Partial<WaterMarkProps>
  WaterfallFlow?: Partial<WaterfallFlowProps>
}

interface DefaultProps_ {
  set: (props: IDefaultProps) => IDefaultProps
  get: () => IDefaultProps
}

declare const DefaultProps: DefaultProps_

export { DefaultProps }
