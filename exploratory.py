import tensorflow as tf 

nomask = tf.io.read_file('media/Face-Mask-Detector/0nomask.png')
mask = tf.io.read_file('media/Face-Mask-Detector/0mask.jpg')


decodedmask = tf.image.decode_image(mask,3)
decodednomask = tf.image.decode_image(nomask,3)


#get tensor output
print(decodedmask)
print(decodednomask)

#get average rgb
print(tf.reduce_mean(tf.reduce_mean(decodedmask, 1), 0))
print(tf.reduce_mean(tf.reduce_mean(decodednomask, 1), 0))
