# 使用 Nginx 作为生产阶段
FROM nginx:alpine

# 将自定义的 Nginx 配置文件复制到容器中
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 将构建的文件复制到 Nginx 默认的静态文件目录
COPY dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
